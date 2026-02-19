'use client'

// Printify API Integration
// Documentation: https://developers.printify.com/

const PRINTIFY_API_BASE = 'https://api.printify.com/v1'

interface PrintifyProduct {
  id: number
  title: string
  description: string
  images: { src: string }[]
  variants: PrintifyVariant[]
  print_provider_id: number
  blue_print_id: number
}

interface PrintifyVariant {
  id: number
  title: string
  price: number
  is_enabled: boolean
  sku: string
}

interface PrintifyShop {
  id: number
  title: string
}

export async function getPrintifyShops(apiKey: string): Promise<PrintifyShop[]> {
  const response = await fetch(`${PRINTIFY_API_BASE}/shops.json`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  
  if (!response.ok) {
    throw new Error(`Failed to fetch shops: ${response.statusText}`)
  }
  
  return response.json()
}

export async function getPrintifyProducts(apiKey: string, shopId: number): Promise<PrintifyProduct[]> {
  const response = await fetch(`${PRINTIFY_API_BASE}/shops/${shopId}/products.json`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`)
  }
  
  const data = await response.json()
  return data.data || []
}

export async function getPrintifyProduct(apiKey: string, shopId: number, productId: number): Promise<PrintifyProduct> {
  const response = await fetch(`${PRINTIFY_API_BASE}/shops/${shopId}/products/${productId}.json`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`)
  }
  
  return response.json()
}

export async function createPrintifyOrder(
  apiKey: string, 
  shopId: number, 
  order: {
    line_items: {
      product_id: number
      variant_id: number
      quantity: number
    }[]
    address_to: {
      first_name: string
      last_name: string
      email: string
      phone: string
      address1: string
      address2: string
      city: string
      state: string
      country: string
      zip: string
    }
  }
) {
  const response = await fetch(`${PRINTIFY_API_BASE}/shops/${shopId}/orders.json`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
  
  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Failed to create order: ${JSON.stringify(error)}`)
  }
  
  return response.json()
}

// Transform Printify product to our store format
export function transformPrintifyProduct(printifyProduct: PrintifyProduct) {
  const basePrice = printifyProduct.variants[0]?.price || 29.99
  
  return {
    id: String(printifyProduct.id),
    name: printifyProduct.title,
    price: basePrice,
    image: printifyProduct.images[0]?.src || '/placeholder.jpg',
    images: printifyProduct.images.map(img => img.src),
    description: printifyProduct.description,
    category: 'All',
    sizes: printifyProduct.variants.map(v => v.title).filter(Boolean),
    inStock: printifyProduct.variants.some(v => v.is_enabled),
    printifyId: printifyProduct.id,
    printifyVariants: printifyProduct.variants,
  }
}
