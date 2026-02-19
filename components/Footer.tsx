'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="marquee">
        <div className="marquee-content">
          <span>LIMITED DROP // WORLDWIDE SHIPPING // NEW COLLECTION AVAILABLE // OTAKU WEAR // PREMIUM QUALITY // FAST SHIPPING // </span>
          <span>LIMITED DROP // WORLDWIDE SHIPPING // NEW COLLECTION AVAILABLE // OTAKU WEAR // PREMIUM QUALITY // FAST SHIPPING // </span>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-kanji">鬼</span>
                <span className="logo-text">OTAKU WEAR</span>
              </div>
              <p className="brand-description">
                Premium anime streetwear for the modern otaku. Bold designs, premium quality, unlimited style.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Discord">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.5 12h-4.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H21"></path>
                    <path d="M15 9a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 9v3a1.5 1.5 0 0 0 1.5 1.5H15"></path>
                    <path d="M18 14a5 5 0 0 1-5 5h-1"></path>
                    <circle cx="8.5" cy="14.5" r="2.5"></circle>
                    <circle cx="15.5" cy="14.5" r="2.5"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Shop</h4>
              <ul>
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Hoodies</a></li>
                <li><a href="#">Jackets</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">New Arrivals</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Size Guide</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Get exclusive drops and discounts.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 OTAKU WEAR. All rights reserved.</p>
          <p className="made-with">Made with 🧡 for the anime community</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, transparent 0%, rgba(45, 58, 68, 0.5) 100%);
        }

        .marquee {
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-pink));
          padding: 14px 0;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }

        .marquee-content span {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: white;
          padding-right: 50px;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .footer-main {
          padding: 80px 0 60px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
          gap: 50px;
        }

        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .logo-kanji {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-text {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-light);
        }

        .brand-description {
          font-size: 14px;
          color: rgba(238, 242, 245, 0.7);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #8BA0AF 0%, #6D7F8D 100%);
          border-radius: 50%;
          color: var(--text-dark);
          transition: all 0.3s;
          box-shadow: 
            3px 3px 10px rgba(74, 89, 102, 0.3),
            -3px -3px 10px rgba(217, 226, 233, 0.2);
        }

        .social-links a:hover {
          transform: translateY(-3px);
          background: linear-gradient(145deg, var(--accent-cyan), #00a8cc);
          color: white;
        }

        .footer-links h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 24px;
          letter-spacing: 0.1em;
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          font-size: 14px;
          color: rgba(238, 242, 245, 0.6);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
        }

        .footer-newsletter h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 12px;
          letter-spacing: 0.1em;
        }

        .footer-newsletter p {
          font-size: 14px;
          color: rgba(238, 242, 245, 0.6);
          margin-bottom: 20px;
        }

        .newsletter-form {
          display: flex;
          gap: 10px;
        }

        .newsletter-input {
          flex: 1;
          background: linear-gradient(145deg, #6D7F8D 0%, #5B6C7A 100%);
          border: none;
          border-radius: 30px;
          padding: 14px 20px;
          font-size: 14px;
          color: var(--text-light);
          box-shadow: 
            inset 3px 3px 8px rgba(74, 89, 102, 0.3),
            inset -3px -3px 8px rgba(217, 226, 233, 0.1);
        }

        .newsletter-input::placeholder {
          color: rgba(238, 242, 245, 0.4);
        }

        .newsletter-btn {
          background: linear-gradient(145deg, var(--accent-cyan), #00a8cc);
          border: none;
          border-radius: 30px;
          padding: 14px 24px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(217, 226, 233, 0.1);
          padding: 24px 0;
        }

        .footer-bottom .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom p {
          font-size: 13px;
          color: rgba(238, 242, 245, 0.5);
        }

        .made-with {
          color: var(--accent-pink) !important;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-brand {
            grid-column: span 1;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .footer-bottom .container {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
