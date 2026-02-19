// API Route: /api/printify
// This acts as a proxy to bypass CORS issues when connecting to Printify from the browser

import { NextRequest, NextResponse } from 'next/server'

const PRINTIFY_API_BASE = 'https://api.printify.com/v1'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const endpoint = searchParams.get('endpoint') || 'shops.json'
  
  // Support both query parameter (for admin) and environment variables (for production)
  const apiKey = searchParams.get('apiKey') || process.env.PRINTIFY_API_KEY
  
  if (!apiKey) {
    return NextResponse.json({ error: 'API key is required. Add PRINTIFY_API_KEY to Vercel environment variables.' }, { status: 400 })
  }

  try {
    const response = await fetch(`${PRINTIFY_API_BASE}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json(
        { error: `Printify API error: ${response.status} - ${error}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to connect to Printify' },
      { status: 500 }
    )
  }
}
