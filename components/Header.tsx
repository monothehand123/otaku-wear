'use client'

import { useCartStore } from '@/store/cart'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <header className="header">
      <div className="header-container">
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="/" className="logo">
          <span className="logo-kanji">鬼</span>
          <span className="logo-text">OTAKU WEAR</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="cart-button" onClick={openCart}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(91, 108, 122, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(217, 226, 233, 0.1);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .menu-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text-light);
          transition: 0.3s;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text-light);
        }

        .logo-kanji {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .nav {
          display: flex;
          gap: 40px;
        }

        .nav a {
          color: var(--text-light);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.3s;
          position: relative;
        }

        .nav a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-cyan);
          transition: width 0.3s;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .cart-button {
          position: relative;
          background: linear-gradient(145deg, #97B0C2 0%, #7A919E 100%);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-dark);
          box-shadow: 
            5px 5px 15px rgba(74, 89, 102, 0.4),
            -5px -5px 15px rgba(217, 226, 233, 0.2);
          transition: all 0.3s ease;
        }

        .cart-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            8px 8px 20px rgba(74, 89, 102, 0.5),
            -8px -8px 20px rgba(217, 226, 233, 0.3);
        }

        .cart-count {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--accent-pink);
          color: white;
          font-size: 11px;
          font-weight: 700;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .nav {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(91, 108, 122, 0.98);
            flex-direction: column;
            padding: 32px;
            gap: 24px;
            transform: translateX(-100%);
            transition: transform 0.3s;
          }

          .nav.active {
            transform: translateX(0);
          }

          .logo-text {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
