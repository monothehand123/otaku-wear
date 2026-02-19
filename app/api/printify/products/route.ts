// API Route: /api/printify/products
// Automatically fetches products from Printify using environment variables

import { NextResponse } from 'next/server'

const PRINTIFY_API_BASE = 'https://api.printify.com/v1'

export async function GET() {
  // Get API key and shop ID from environment variables
  const apiKey = process.env.PRINTIFY_API_KEY
  const shopId = process.env.PRINTIFY_SHOP_ID

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Printify API key not configured. Please add PRINTIFY_API_KEY to Vercel environment variables.' },
      { status: 500 }
    )
  }

  if (!shopId) {
    return NextResponse.json(
      { error: 'Printify Shop ID not configured. Please add PRINTIFY_SHOP_ID to Vercel environment variables.' },
      { status: 500 }
    )
  }

  try {
    // Fetch products from Printify
    const response = await fetch(
      `${PRINTIFY_API_BASE}/shops/${shopId}/products.json`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        // Cache products for 5 minutes to reduce API calls
        next: { revalidate: 300 }
      }
    )

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json(
        { error: `Printify API error: ${response.status} - ${error}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const printifyProducts = data.data || []
    
    // Transform products to our format
    const transformedProducts = printifyProducts.map((printifyProduct: any) => {
      const basePrice = printifyProduct.variants?.[0]?.price || 29.99
      const sizes = printifyProduct.variants?.map((v: any) => v.title).filter(Boolean) || []
      
      return {
        id: String(printifyProduct.id),
        name: printifyProduct.title,
        price: basePrice,
        image: printifyProduct.images?.[0]?.src || '/placeholder.jpg',
        images: printifyProduct.images?.map((img: any) => img.src) || [],
        description: printifyProduct.description || '',
        category: 'All',
        sizes: sizes.length > 0 ? sizes : ['One Size'],
        inStock: printifyProduct.variants?.some((v: any) => v.is_enabled) || false,
        printifyId: printifyProduct.id,
        printifyVariants: printifyProduct.variants || [],
      }
    })
    
    return NextResponse.json(transformedProducts)
  } catch (error) {
    console.error('Printify fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products from Printify' },
      { status: 500 }
    )
  }
}
