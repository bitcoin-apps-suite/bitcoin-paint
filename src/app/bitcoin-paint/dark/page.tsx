'use client';

import React from 'react';
import './dark.css';

const DarkPaintPage: React.FC = () => {
  return (
    <div className="dark-paint-page">
      {/* Hero Section */}
      <section className="dark-hero-section">
        <div className="dark-hero-background">
          <div className="dark-hero-gradient"></div>
          <div className="dark-hero-particles"></div>
        </div>
        
        <div className="dark-hero-content">
          <div className="dark-hero-logo">
            <span className="dark-bitcoin-symbol">₿</span>
          </div>
          
          <h1 className="dark-hero-title">
            <span className="dark-title-bitcoin">BITCOIN</span>
            <span className="dark-title-paint">PAINT</span>
            <span className="dark-title-dark">DARK</span>
          </h1>
          
          <p className="dark-hero-subtitle">
            Enter the shadows of digital art creation. Advanced tools, deeper features, 
            and professional-grade capabilities for serious digital artists.
          </p>
          
          <div className="dark-hero-buttons">
            <button className="dark-cta-primary">
              <span>Enter Dark Mode</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="dark-cta-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span>Advanced Tools</span>
            </button>
          </div>
          
          <div className="dark-hero-stats">
            <div className="dark-stat">
              <div className="dark-stat-number">∞</div>
              <div className="dark-stat-label">Layers</div>
            </div>
            <div className="dark-stat">
              <div className="dark-stat-number">4K+</div>
              <div className="dark-stat-label">Brushes</div>
            </div>
            <div className="dark-stat">
              <div className="dark-stat-number">Pro</div>
              <div className="dark-stat-label">Features</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="dark-features-section">
        <div className="dark-section-container">
          <div className="dark-section-header">
            <h2 className="dark-section-title">
              PROFESSIONAL DIGITAL ART SUITE
            </h2>
            <p className="dark-section-subtitle">
              Unlock the full potential of Bitcoin Paint with advanced features designed for professional artists and creators.
            </p>
          </div>
          
          <div className="dark-features-grid">
            <div className="dark-feature-card">
              <div className="dark-feature-icon layers">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="dark-feature-title">UNLIMITED LAYERS</h3>
              <p className="dark-feature-description">
                Work with unlimited layers, blend modes, and opacity controls. 
                Non-destructive editing with full layer management.
              </p>
            </div>
            
            <div className="dark-feature-card">
              <div className="dark-feature-icon brushes">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="dark-feature-title">ADVANCED BRUSHES</h3>
              <p className="dark-feature-description">
                4000+ premium brushes including texture brushes, watercolor effects, 
                oil painting simulations, and custom brush creation tools.
              </p>
            </div>
            
            <div className="dark-feature-card">
              <div className="dark-feature-icon effects">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="dark-feature-title">REAL-TIME EFFECTS</h3>
              <p className="dark-feature-description">
                Apply filters, lighting effects, and post-processing in real-time. 
                HDR rendering and advanced color grading tools.
              </p>
            </div>
            
            <div className="dark-feature-card">
              <div className="dark-feature-icon ai">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="dark-feature-title">AI ASSISTANCE</h3>
              <p className="dark-feature-description">
                AI-powered color suggestions, composition analysis, 
                and automated background removal for enhanced productivity.
              </p>
            </div>
            
            <div className="dark-feature-card">
              <div className="dark-feature-icon blockchain">
                <span>₿</span>
              </div>
              <h3 className="dark-feature-title">PREMIUM NFT FEATURES</h3>
              <p className="dark-feature-description">
                Advanced NFT metadata, collection management, 
                royalty tracking, and exclusive marketplace access.
              </p>
            </div>
            
            <div className="dark-feature-card">
              <div className="dark-feature-icon collaboration">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="dark-feature-title">TEAM COLLABORATION</h3>
              <p className="dark-feature-description">
                Real-time collaboration tools, version control, 
                and shared project workspaces for team projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="dark-pricing-section">
        <div className="dark-section-container">
          <div className="dark-section-header">
            <h2 className="dark-section-title">UNLOCK DARK MODE</h2>
            <p className="dark-section-subtitle">
              Choose your level of artistic power with flexible Bitcoin payments.
            </p>
          </div>
          
          <div className="dark-pricing-grid">
            <div className="dark-pricing-card">
              <div className="dark-pricing-header">
                <h3 className="dark-pricing-title">DARK ACCESS</h3>
                <div className="dark-pricing-price">
                  <span className="dark-price-amount">₿ 0.001</span>
                  <span className="dark-price-period">/month</span>
                </div>
              </div>
              <div className="dark-pricing-features">
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dark mode interface</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>500+ premium brushes</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>20 layers maximum</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic effects</span>
                </div>
              </div>
              <button className="dark-pricing-cta">Get Dark Access</button>
            </div>
            
            <div className="dark-pricing-card featured">
              <div className="dark-pricing-badge">MOST POPULAR</div>
              <div className="dark-pricing-header">
                <h3 className="dark-pricing-title">DARK PRO</h3>
                <div className="dark-pricing-price">
                  <span className="dark-price-amount">₿ 0.005</span>
                  <span className="dark-price-period">/month</span>
                </div>
              </div>
              <div className="dark-pricing-features">
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Dark Access</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>4000+ premium brushes</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited layers</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI assistance tools</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time collaboration</span>
                </div>
              </div>
              <button className="dark-pricing-cta">Get Dark Pro</button>
            </div>
            
            <div className="dark-pricing-card">
              <div className="dark-pricing-header">
                <h3 className="dark-pricing-title">DARK STUDIO</h3>
                <div className="dark-pricing-price">
                  <span className="dark-price-amount">₿ 0.01</span>
                  <span className="dark-price-period">/month</span>
                </div>
              </div>
              <div className="dark-pricing-features">
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Dark Pro</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom brush creation</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced NFT features</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </div>
                <div className="dark-pricing-feature">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Team management</span>
                </div>
              </div>
              <button className="dark-pricing-cta">Get Dark Studio</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark-cta-section">
        <div className="dark-cta-content">
          <h2 className="dark-cta-title">
            EMBRACE THE DARKNESS
          </h2>
          <p className="dark-cta-subtitle">
            Step into the professional realm of digital art creation. Unlock advanced tools, 
            unlimited possibilities, and join the elite community of Bitcoin Paint Dark users.
          </p>
          
          <div className="dark-cta-buttons">
            <button className="dark-cta-primary large">
              <span>ENTER DARK MODE</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DarkPaintPage;