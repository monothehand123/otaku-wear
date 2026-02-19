// Printify Product Sync Script
// Run this to sync products from Printify to your store

import { getPrintifyShops, getPrintifyProducts, transformPrintifyProduct } from './printify'

// This would be called server-side or in a cron job
export async function syncProductsFromPrintify(apiKey: string) {
  try {
    console.log('🔄 Starting Printify sync...')
    
    // Get user's shops
    const shops = await getPrintifyShops(apiKey)
    console.log(`📦 Found ${shops.length} shop(s)`)
    
    if (shops.length === 0) {
      throw new Error('No shops found! Create a shop in Printify first.')
    }
    
    // Use first shop
    const shop = shops[0]
    console.log(`🛍️ Using shop: ${shop.title}`)
    
    // Get all products
    const products = await getPrintifyProducts(apiKey, shop.id)
    console.log(`📋 Found ${products.length} products`)
    
    // Transform to our format
    const transformedProducts = products.map(transformPrintifyProduct)
    
    console.log('✅ Sync complete!')
    console.log(`📝 Products ready: ${transformedProducts.length}`)
    
    return transformedProducts
  } catch (error) {
    console.error('❌ Sync failed:', error)
    throw error
  }
}

// Example usage:
// import { syncProductsFromPrintify } from './lib/sync'
// 
// const products = await syncProductsFromPrintify(process.env.PRINTIFY_API_KEY!)
