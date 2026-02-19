'use client'

import { useState, useEffect } from 'react'
import { categories } from '@/data/products'
import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  sizes?: string[]
  description?: string
}

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load products from localStorage (synced from Printify admin)
    const storedProducts = localStorage.getItem('otakuwear_products')
    if (storedProducts) {
      try {
        const parsed = JSON.parse(storedProducts)
        setProducts(parsed)
      } catch (e) {
        console.error('Failed to parse products:', e)
        setProducts([])
      }
    }
    setLoading(false)
  }, [])

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter((p: Product) => p.category === activeCategory)

  // Get unique categories from products
  const productCategories = ['All', ...new Set(products.map((p: Product) => p.category).filter(Boolean))]

  return (
    <section id="shop" className="shop-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag mono">SHOP</span>
          <h2 className="section-title">NEW DROPS</h2>
        </div>
        
        <div className="category-filter">
          {productCategories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="product-grid">
          {loading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0' }}>
              <p style={{ color: 'var(--text-light)', opacity: 0.7 }}>Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0' }}>
              <p style={{ color: 'var(--text-light)', opacity: 0.7, marginBottom: '20px' }}>
                {products.length === 0 
                  ? 'No products yet. Go to /admin to sync with Printify!'
                  : 'No products in this category.'
                }
              </p>
            </div>
          ) : (
            filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .shop-section {
          padding: 100px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tag {
          display: inline-block;
          font-size: 12px;
          color: var(--accent-cyan);
          margin-bottom: 16px;
          letter-spacing: 0.3em;
        }

        .section-title {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: var(--text-light);
        }

        .category-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 50px;
        }

        .filter-btn {
          background: linear-gradient(145deg, #8BA0AF 0%, #6D7F8D 100%);
          border: none;
          border-radius: 30px;
          padding: 12px 28px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 
            5px 5px 15px rgba(74, 89, 102, 0.3),
            -5px -5px 15px rgba(217, 226, 233, 0.2);
        }

        .filter-btn:hover {
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(145deg, var(--accent-cyan), #00a8cc);
          color: white;
          box-shadow: 
            0 8px 25px rgba(0, 212, 255, 0.4);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        @media (max-width: 768px) {
          .shop-section {
            padding: 60px 0;
          }

          .category-filter {
            gap: 8px;
          }

          .filter-btn {
            padding: 10px 20px;
            font-size: 12px;
          }

          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;
          }
        }
      `}</style>
    </section>
  )
}
