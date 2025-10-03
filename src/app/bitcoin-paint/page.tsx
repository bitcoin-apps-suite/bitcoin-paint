'use client';

import React from 'react';
import './marketing.css';

const MarketingPage: React.FC = () => {
  return (
    <div className="marketing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-logo">
            <span className="bitcoin-symbol">₿</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-bitcoin">BITCOIN</span>
            <span className="title-paint">PAINT</span>
          </h1>
          
          <p className="hero-subtitle">
            The world's first blockchain-powered digital art platform with native Bitcoin payments, 
            NFT minting, and decentralized art marketplace.
          </p>
          
          <div className="hero-buttons">
            <button className="cta-primary">
              <span>Launch App</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="cta-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Decentralized</div>
            </div>
            <div className="stat">
              <div className="stat-number">$0.01</div>
              <div className="stat-label">Per NFT Mint</div>
            </div>
            <div className="stat">
              <div className="stat-number">HD</div>
              <div className="stat-label">Canvas Quality</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="app-preview">
            <div className="app-window">
              <div className="window-header">
                <div className="window-controls">
                  <div className="control close"></div>
                  <div className="control minimize"></div>
                  <div className="control maximize"></div>
                </div>
                <div className="window-title">Bitcoin Paint</div>
              </div>
              <div className="window-content">
                <div className="mock-sidebar">
                  <div className="mock-nav-item active">🎨 Canvas</div>
                  <div className="mock-nav-item">🖼️ Gallery</div>
                  <div className="mock-nav-item">💰 Exchange</div>
                  <div className="mock-nav-item">⭐ Collections</div>
                </div>
                <div className="mock-canvas-area">
                  <div className="mock-canvas">
                    <div className="canvas-tools">
                      <div className="tool-item">🖌️</div>
                      <div className="tool-item">✏️</div>
                      <div className="tool-item">🖍️</div>
                      <div className="tool-item">🎯</div>
                    </div>
                    <div className="canvas-workspace">
                      <div className="artwork-preview">
                        <div className="artwork-layer layer-1"></div>
                        <div className="artwork-layer layer-2"></div>
                        <div className="artwork-layer layer-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              REVOLUTIONARY DIGITAL ART PLATFORM
            </h2>
            <p className="section-subtitle">
              Built on Bitcoin blockchain technology for ultimate ownership, monetization, and artistic freedom.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon bitcoin">
                <span>₿</span>
              </div>
              <h3 className="feature-title">INSTANT NFT MINTING</h3>
              <p className="feature-description">
                Mint your artwork as NFTs directly on Bitcoin blockchain. 
                True ownership with immutable provenance and history.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon security">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="feature-title">SECURE OWNERSHIP</h3>
              <p className="feature-description">
                Cryptographic proof of ownership ensures your art remains yours. 
                No central authority can remove or alter your creations.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon blockchain">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="feature-title">BLOCKCHAIN GALLERY</h3>
              <p className="feature-description">
                Store artwork permanently on Bitcoin blockchain. 
                Immutable, censorship-resistant, and globally accessible gallery.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon marketplace">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="feature-title">BUILT-IN MARKETPLACE</h3>
              <p className="feature-description">
                Buy, sell, and trade NFT artwork directly within the platform. 
                Peer-to-peer transactions with minimal fees.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon tools">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m10 20a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4zM17 3V1" />
                </svg>
              </div>
              <h3 className="feature-title">PROFESSIONAL TOOLS</h3>
              <p className="feature-description">
                Advanced brush engines, layers, filters, and effects. 
                Everything you need to create stunning digital masterpieces.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon community">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="feature-title">ARTIST COMMUNITY</h3>
              <p className="feature-description">
                Connect with artists worldwide. Share techniques, collaborate, 
                and discover emerging talent in the decentralized art space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">TRUSTED BY DIGITAL ARTISTS</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                "Bitcoin Paint has revolutionized how I create and sell digital art. 
                The NFT integration is seamless, and I finally own my work completely."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Maya Patel</div>
                  <div className="author-title">Digital Artist & NFT Creator</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                "The professional tools rival desktop applications, but with the added 
                benefit of blockchain ownership. It's the future of digital art."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Alex Chen</div>
                  <div className="author-title">Concept Artist, GameStudio</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                "The built-in marketplace makes it incredibly easy to monetize my art. 
                No middlemen, just direct sales to collectors worldwide."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Jordan Williams</div>
                  <div className="author-title">Independent Artist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            READY TO CREATE YOUR MASTERPIECE?
          </h2>
          <p className="cta-subtitle">
            Join the revolution in digital art creation. Connect your Bitcoin wallet and start creating, 
            minting, and selling your artwork on the blockchain.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-primary large">
              <span>LAUNCH BITCOIN PAINT</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="cta-features">
            <div className="cta-feature">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free to start</span>
            </div>
            <div className="cta-feature">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No signup required</span>
            </div>
            <div className="cta-feature">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant NFT minting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="bitcoin-symbol">₿</span>
              <span className="brand-text">
                <span className="brand-bitcoin">BITCOIN</span>
                <span className="brand-paint">PAINT</span>
              </span>
            </div>
            <p className="footer-tagline">
              Decentralized • Creative • Unstoppable
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <a href="#features">Features</a>
              <a href="#tools">Tools</a>
              <a href="#marketplace">Marketplace</a>
              <a href="#api">API</a>
            </div>
            
            <div className="link-group">
              <h4>Community</h4>
              <a href="#artists">Artists</a>
              <a href="#galleries">Galleries</a>
              <a href="#events">Events</a>
              <a href="#showcase">Showcase</a>
            </div>
            
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#tutorials">Tutorials</a>
              <a href="#support">Support</a>
              <a href="#docs">Documentation</a>
              <a href="#blog">Blog</a>
            </div>
            
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#licensing">Licensing</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 The Bitcoin Corporation LTD (16735102). Built on Bitcoin blockchain technology.
          </div>
          <div className="footer-social">
            <a href="#" className="social-link">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="social-link">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingPage;