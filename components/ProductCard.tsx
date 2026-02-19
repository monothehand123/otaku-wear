'use client'

import { useState } from 'react'
import { Product, useCartStore } from '@/store/cart'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [isAdding, setIsAdding] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, selectedSize)
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <span className="product-category">{product.category}</span>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-sizes">
          {product.sizes.map(size => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button 
            className={`add-to-cart ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
          >
            {isAdding ? 'ADDED!' : 'ADD TO CART'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          background: linear-gradient(145deg, #97B0C2 0%, #7A919E 100%);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 
            15px 15px 40px rgba(74, 89, 102, 0.4),
            -15px -15px 40px rgba(217, 226, 233, 0.2);
          transition: all 0.4s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            20px 20px 50px rgba(74, 89, 102, 0.5),
            -20px -20px 50px rgba(217, 226, 233, 0.3);
        }

        .product-image {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.08);
        }

        .product-overlay {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .product-category {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          color: var(--accent-cyan);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .product-info {
          padding: 20px;
        }

        .product-name {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .product-description {
          font-size: 12px;
          color: var(--text-dark);
          opacity: 0.7;
          margin-bottom: 16px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-sizes {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .size-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: linear-gradient(145deg, #8BA0AF 0%, #6D7F8D 100%);
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 
            3px 3px 8px rgba(74, 89, 102, 0.3),
            -3px -3px 8px rgba(217, 226, 233, 0.2);
        }

        .size-btn:hover {
          transform: translateY(-2px);
        }

        .size-btn.active {
          background: linear-gradient(145deg, var(--accent-cyan), #00a8cc);
          color: white;
          box-shadow: 
            0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-price {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .add-to-cart {
          background: linear-gradient(145deg, var(--accent-pink), #e05a8a);
          border: none;
          border-radius: 25px;
          padding: 12px 24px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 5px 20px rgba(255, 107, 157, 0.4);
        }

        .add-to-cart:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 157, 0.5);
        }

        .add-to-cart.adding {
          background: linear-gradient(145deg, #00D4FF, #00a8cc);
        }
      `}</style>
    </div>
  )
}
