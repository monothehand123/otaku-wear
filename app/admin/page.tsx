'use client'

import { useState } from 'react'
import { getPrintifyShops, getPrintifyProducts, transformPrintifyProduct } from '@/lib/printify'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [shopId, setShopId] = useState<number | null>(null)

  const handleConnect = async () => {
    if (!apiKey) {
      setMessage('Please enter your Printify API key')
      return
    }
    
    setLoading(true)
    setMessage('Connecting to Printify...')
    
    try {
      const shops = await getPrintifyShops(apiKey)
      
      if (shops.length === 0) {
        setMessage('No shops found. Create a shop in Printify first!')
        setLoading(false)
        return
      }
      
      setShopId(shops[0].id)
      setMessage(`Connected to "${shops[0].title}"! Now click "Sync Products"`)
    } catch (error) {
      setMessage('Failed to connect. Check your API key.')
      console.error(error)
    }
    
    setLoading(false)
  }

  const handleSync = async () => {
    if (!apiKey || !shopId) {
      setMessage('Please connect to Printify first')
      return
    }
    
    setLoading(true)
    setMessage('Syncing products...')
    
    try {
      const printifyProducts = await getPrintifyProducts(apiKey, shopId)
      const transformed = printifyProducts.map(transformPrintifyProduct)
      
      // Save to localStorage for demo (in production, save to database)
      localStorage.setItem('otakuwear_products', JSON.stringify(transformed))
      
      setProducts(transformed)
      setMessage(`✅ Synced ${transformed.length} products!`)
    } catch (error) {
      setMessage('Failed to sync products')
      console.error(error)
    }
    
    setLoading(false)
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '40px 24px',
      background: 'linear-gradient(135deg, #5B6C7A 0%, #6D7F8D 100%)',
      color: '#EEF2F5'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '8px' }}>Printify Admin</h1>
        <p style={{ opacity: 0.8, marginBottom: '40px' }}>
          Connect your Printify store and sync products
        </p>

        {/* API Key Input */}
        <div style={{ 
          background: 'linear-gradient(145deg, #8BA0AF 0%, #6D7F8D 100%)',
          borderRadius: '24px',
          padding: '32px',
          marginBottom: '24px',
          boxShadow: '20px 20px 60px rgba(74, 89, 102, 0.5), -20px -20px 60px rgba(217, 226, 233, 0.3)'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>1. Connect to Printify</h2>
          <input
            type="password"
            placeholder="Paste your Printify API key here"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 20px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '14px',
              marginBottom: '16px',
              background: 'rgba(255,255,255,0.9)',
              color: '#2D3A44'
            }}
          />
          <button
            onClick={handleConnect}
            disabled={loading}
            style={{
              background: 'linear-gradient(145deg, #00D4FF, #00a8cc)',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 32px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'white',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Connecting...' : 'Connect'}
          </button>
        </div>

        {/* Sync Button */}
        <div style={{ 
          background: 'linear-gradient(145deg, #8BA0AF 0%, #6D7F8D 100%)',
          borderRadius: '24px',
          padding: '32px',
          marginBottom: '24px',
          boxShadow: '20px 20px 60px rgba(74, 89, 102, 0.5), -20px -20px 60px rgba(217, 226, 233, 0.3)'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>2. Sync Products</h2>
          <p style={{ opacity: 0.8, marginBottom: '16px', fontSize: '14px' }}>
            Fetch all products from your Printify store
          </p>
          <button
            onClick={handleSync}
            disabled={loading || !shopId}
            style={{
              background: 'linear-gradient(145deg, #FF6B9D, #ff4d7d)',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 32px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'white',
              cursor: loading || !shopId ? 'not-allowed' : 'pointer',
              opacity: loading || !shopId ? 0.7 : 1
            }}
          >
            {loading ? 'Syncing...' : 'Sync Products'}
          </button>
        </div>

        {/* Message */}
        {message && (
          <div style={{
            padding: '16px 24px',
            borderRadius: '12px',
            marginBottom: '24px',
            background: message.includes('✅') 
              ? 'rgba(0, 212, 255, 0.2)' 
              : 'rgba(255, 107, 157, 0.2)',
            border: `1px solid ${message.includes('✅') ? '#00D4FF' : '#FF6B9D'}`
          }}>
            {message}
          </div>
        )}

        {/* Products Preview */}
        {products.length > 0 && (
          <div style={{ 
            background: 'linear-gradient(145deg, #8BA0AF 0%, #6D7F8D 100%)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '20px 20px 60px rgba(74, 89, 102, 0.5), -20px -20px 60px rgba(217, 226, 233, 0.3)'
          }}>
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>
              Synced Products ({products.length})
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {products.slice(0, 6).map((product) => (
                <div key={product.id} style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '12px',
                  textAlign: 'center'
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '8px'
                    }}
                  />
                  <p style={{ fontSize: '12px', fontWeight: 600 }}>{product.name}</p>
                  <p style={{ fontSize: '14px', color: '#00D4FF' }}>${product.price}</p>
                </div>
              ))}
            </div>
            {products.length > 6 && (
              <p style={{ marginTop: '16px', opacity: 0.7, textAlign: 'center' }}>
                +{products.length - 6} more products
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
