'use client'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge mono">
          <span className="badge-dot"></span>
          NEW COLLECTION 2026
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">STREETWEAR</span>
          <span className="title-line accent">REIMAGINED</span>
        </h1>
        
        <p className="hero-subtitle">
          Premium anime-inspired fashion for the modern otaku. 
          Bold designs. Premium quality. Unlimited style.
        </p>
        
        <div className="hero-actions">
          <a href="#shop" className="btn-primary">
            SHOP NOW
          </a>
          <a href="#collections" className="btn-secondary">
            VIEW COLLECTIONS
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Designs</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span className="mono">SCROLL</span>
        <div className="scroll-line"></div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 80px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(255, 107, 157, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(145deg, #97B0C2 0%, #7A919E 100%);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 32px;
          box-shadow: 
            8px 8px 20px rgba(74, 89, 102, 0.3),
            -8px -8px 20px rgba(217, 226, 233, 0.2);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-pink);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hero-title {
          font-size: clamp(48px, 10vw, 120px);
          line-height: 0.95;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .title-line {
          display: block;
        }

        .title-line.accent {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          color: rgba(238, 242, 245, 0.8);
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .btn-primary {
          display: inline-block;
          background: linear-gradient(145deg, var(--accent-cyan), var(--accent-purple));
          color: white;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 
            0 10px 30px rgba(0, 212, 255, 0.3),
            inset 0 0 0 rgba(255, 255, 255, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 15px 40px rgba(0, 212, 255, 0.4),
            inset 0 0 0 rgba(255, 255, 255, 0.1);
        }

        .btn-secondary {
          display: inline-block;
          background: linear-gradient(145deg, #97B0C2 0%, #7A919E 100%);
          color: var(--text-dark);
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 
            8px 8px 20px rgba(74, 89, 102, 0.4),
            -8px -8px 20px rgba(217, 226, 233, 0.2);
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 
            12px 12px 30px rgba(74, 89, 102, 0.5),
            -12px -12px 30px rgba(217, 226, 233, 0.3);
        }

        .hero-stats {
          display: flex;
          gap: 60px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 32px;
          font-weight: 700;
          color: var(--text-light);
        }

        .stat-label {
          font-size: 12px;
          color: rgba(238, 242, 245, 0.6);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .hero-scroll span {
          font-size: 10px;
          color: rgba(238, 242, 245, 0.5);
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--accent-cyan), transparent);
          animation: scroll-bounce 2s infinite;
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            gap: 30px;
          }
        }
      `}</style>
    </section>
  )
}
