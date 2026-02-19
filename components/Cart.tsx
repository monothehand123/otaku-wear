'use client'

import { useCartStore } from '@/store/cart'
import Image from 'next/image'

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalPrice } = useCartStore()

  const totalPrice = getTotalPrice()

  const handleCheckout = async () => {
    // In production, you would create a Stripe checkout session here
    alert('Checkout functionality would be implemented with Stripe. This is a demo store.')
  }

  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={closeCart}></div>
      
      <div className="cart-drawer">
        <div className="cart-header">
          <h2 className="cart-title">YOUR CART</h2>
          <span className="cart-count">{items.length} items</span>
          <button className="close-btn" onClick={closeCart}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🛒</span>
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={closeCart}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}-${index}`} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-size">Size: {item.selectedSize}</p>
                  <div className="item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-price-actions">
                  <span className="item-price">${item.price * item.quantity}</span>
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(item.id, item.selectedSize)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span className="total-price">${totalPrice}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .cart-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          z-index: 2000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 450px;
          background: linear-gradient(145deg, #6D7F8D 0%, #5B6C7A 100%);
          z-index: 2001;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.3s ease;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .cart-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 24px;
          border-bottom: 1px solid rgba(217, 226, 233, 0.1);
        }

        .cart-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-light);
          flex: 1;
        }

        .cart-count {
          font-size: 13px;
          color: rgba(238, 242, 245, 0.6);
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          padding: 8px;
          display: flex;
          transition: transform 0.2s;
        }

        .close-btn:hover {
          transform: rotate(90deg);
        }

        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
        }

        .empty-cart {
          text-align: center;
          padding: 60px 20px;
        }

        .empty-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }

        .empty-cart p {
          color: rgba(238, 242, 245, 0.6);
          margin-bottom: 24px;
        }

        .continue-shopping {
          background: linear-gradient(145deg, #97B0C2 0%, #7A919E 100%);
          border: none;
          border-radius: 30px;
          padding: 14px 32px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-dark);
          cursor: pointer;
          box-shadow: 
            5px 5px 15px rgba(74, 89, 102, 0.3),
            -5px -5px 15px rgba(217, 226, 233, 0.2);
        }

        .cart-item {
          display: flex;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(217, 226, 233, 0.1);
        }

        .item-image {
          width: 80px;
          height: 100px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .item-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-light);
        }

        .item-size {
          font-size: 12px;
          color: rgba(238, 242, 245, 0.6);
        }

        .item-quantity {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }

        .qty-btn {
          width: 28px;
          height: 28px;
          border: none;
          background: linear-gradient(145deg, #8BA0AF 0%, #6D7F8D 100%);
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            2px 2px 6px rgba(74, 89, 102, 0.3),
            -2px -2px 6px rgba(217, 226, 233, 0.2);
        }

        .item-quantity span {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-light);
          min-width: 20px;
          text-align: center;
        }

        .item-price-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .item-price {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-light);
        }

        .remove-btn {
          background: none;
          border: none;
          font-size: 11px;
          color: var(--accent-pink);
          cursor: pointer;
          text-decoration: underline;
        }

        .cart-footer {
          padding: 24px;
          border-top: 1px solid rgba(217, 226, 233, 0.1);
          background: rgba(0, 0, 0, 0.1);
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          font-size: 14px;
          color: rgba(238, 242, 245, 0.8);
        }

        .total-price {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-light);
        }

        .checkout-btn {
          width: 100%;
          background: linear-gradient(145deg, var(--accent-cyan), var(--accent-purple));
          border: none;
          border-radius: 30px;
          padding: 18px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        .checkout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
        }

        @media (max-width: 480px) {
          .cart-drawer {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}
