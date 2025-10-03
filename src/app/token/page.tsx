'use client';

import React, { useState, useEffect } from 'react';
import './TokenPage.css';
import Footer from '@/components/Footer';
import PaintHeader from '@/components/PaintHeader';
import DevSidebar from '@/components/DevSidebar';
import Dock from '@/components/Dock';
import TopMenuBar from '@/components/TopMenuBar';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';

const TokenPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="App">
        <TopMenuBar />
        <ProofOfConceptBar />
        <PaintHeader />
        <div className="token-page">
          <div className="token-container">
            <section className="token-hero">
              <h1><span style={{color: '#ffffff'}}>The</span> Bitcoin Paint <span style={{color: '#ffffff'}}>Token</span></h1>
              <p className="token-tagline">Digital art creation meets sustainable economics</p>
              <div className="token-badge">$BPAINT</div>
            </section>
          </div>
        </div>
        <Footer />
        <Dock />
      </div>
    );
  }

  return (
    <div className="App">
      <TopMenuBar />
      <ProofOfConceptBar />
      <PaintHeader />
      <DevSidebar />
      <div className="token-page">
      <div className="token-container">
        {/* Hero Section */}
        <section className="token-hero">
          <h1><span style={{color: '#ffffff'}}>The</span> Bitcoin Paint <span style={{color: '#ffffff'}}>Token</span></h1>
          <p className="token-tagline">
            Digital art creation meets sustainable economics
          </p>
          <div className="token-badge">$BPAINT</div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <h2>Our Open-Source Philosophy</h2>
          <div className="philosophy-content">
            <p>
              Bitcoin Paint is an <strong>open-source project</strong> licensed under MIT and BSV licenses. 
              Our intention is to foster an open culture where forking, cloning, and adding to the code 
              and features is welcomed and encouraged.
            </p>
            <p>
              The $BPAINT token represents our approach to creating a sustainable economic model that 
              aims to reward contributors while maintaining transparency and openness.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <h3>Open Culture</h3>
                <p>MIT & BSV Licensed, fork-friendly, collaborative</p>
              </div>
              <div className="point">
                <h3>Artists First</h3>
                <p>Contributors earn tokens through meaningful artistic work</p>
              </div>
              <div className="point">
                <h3>Value Aligned</h3>
                <p>Success shared with those who create it</p>
              </div>
            </div>
          </div>
        </section>

        {/* Token Model Section */}
        <section className="token-model-section">
          <h2>The $BPAINT Token Model</h2>
          <div className="model-card">
            <h3>How It Works</h3>
            <ul>
              <li>
                <strong>Token Distribution:</strong> Tokens are allocated at our discretion to artists 
                and developers who contribute meaningful content and code that gets merged into production
              </li>
              <li>
                <strong>Revenue Sharing:</strong> The Bitcoin Corporation LTD intends to distribute 
                dividends to token holders from subscription revenues and NFT marketplace fees
              </li>
              <li>
                <strong>Creation = Ownership:</strong> Create value, receive tokens, share in success
              </li>
              <li>
                <strong>Transparent Allocation:</strong> All token grants are recorded on-chain via BSV
              </li>
            </ul>
          </div>

          <div className="model-card warning">
            <h3>Important Notices</h3>
            <ul>
              <li>
                <strong>No Guarantees:</strong> Token allocation is entirely discretionary with no promises 
                of distribution for any particular contribution
              </li>
              <li>
                <strong>Not Employment:</strong> Contributing and receiving tokens does not constitute 
                an employment relationship or contract
              </li>
              <li>
                <strong>Not a Public Offering:</strong> This is not a solicitation for investment or 
                capital raising. $BPAINT tokens are rewards for contribution, not investment instruments
              </li>
              <li>
                <strong>Future Equity:</strong> The Bitcoin Corporation LTD may incorporate and offer 
                regulated equity shares separately from the token system
              </li>
            </ul>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="business-section">
          <h2>The Bitcoin Corporation LTD</h2>
          <div className="business-content">
            <p className="intro">
              Our vision is to create sustainable open-source software through a hybrid model that 
              preserves freedom while generating value.
            </p>

            <div className="business-model">
              <h3>Revenue Model</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>Free Tier</h4>
                  <p>Self-hosted, open-source</p>
                  <p className="price">$0/month</p>
                </div>
                <div className="stream featured">
                  <h4>Pro Tier</h4>
                  <p>Hosted service, premium brushes</p>
                  <p className="price">$19/month</p>
                </div>
                <div className="stream">
                  <h4>Studio</h4>
                  <p>Custom deployment, unlimited assets</p>
                  <p className="price">$199/month</p>
                </div>
              </div>
              
              <h3 style={{marginTop: '40px'}}>Marketplace Revenue</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>NFT Sales</h4>
                  <p>Artists mint & sell their artwork</p>
                  <p className="price">2.5% fee</p>
                </div>
                <div className="stream featured">
                  <h4>Asset Trading</h4>
                  <p>Secondary market for digital art</p>
                  <p className="price">1.5% fee</p>
                </div>
                <div className="stream">
                  <h4>Premium Collections</h4>
                  <p>Curated artwork & exclusive drops</p>
                  <p className="price">3% fee</p>
                </div>
              </div>
            </div>

            <div className="value-flow">
              <h3>Value Flow</h3>
              <div className="flow-diagram">
                <div className="flow-item">
                  <span>Subscriptions + Marketplace fees</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Revenue to Bitcoin Corporation Ltd</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Dividends to $BPAINT holders</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Contributors rewarded for creating</span>
                </div>
              </div>
              <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)'}}>
                The Bitcoin Paint Exchange enables artists to mint NFTs, sell artwork, and trade digital assets,
                generating platform fees that contribute to the ecosystem's sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* How to Contribute Section */}
        <section className="contribute-section">
          <h2>How to Earn $BPAINT Tokens</h2>
          <div className="contribute-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create & Build</h3>
              <p>Create digital artwork or contribute code improvements to the platform</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Submit Work</h3>
              <p>Upload art to the marketplace or create pull requests with clear documentation</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Approved</h3>
              <p>Quality artwork gets featured and code that adds value gets merged</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Receive Tokens</h3>
              <p>Tokens allocated based on contribution impact and artistic quality</p>
            </div>
          </div>

          <div className="contribution-examples">
            <h3>What We Value</h3>
            <ul>
              <li>✅ Original digital artwork</li>
              <li>✅ Brush and tool improvements</li>
              <li>✅ UI/UX enhancements</li>
              <li>✅ Performance optimizations</li>
              <li>✅ NFT marketplace features</li>
              <li>✅ Community tutorials and guides</li>
            </ul>
          </div>
        </section>

        {/* Token Stats Section */}
        <section className="stats-section">
          <h2>Token Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>Total Supply</h3>
              <p className="stat-value">1,000,000,000</p>
              <p className="stat-label">$BPAINT tokens</p>
            </div>
            <div className="stat">
              <h3>Distributed</h3>
              <p className="stat-value">0</p>
              <p className="stat-label">Tokens allocated</p>
            </div>
            <div className="stat">
              <h3>Artists</h3>
              <p className="stat-value">1</p>
              <p className="stat-label">Active creators</p>
            </div>
            <div className="stat">
              <h3>Network</h3>
              <p className="stat-value">BSV</p>
              <p className="stat-label">Blockchain</p>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section className="legal-section">
          <h2>Legal & Regulatory Notice</h2>
          <div className="legal-content">
            <p>
              <strong>Revenue Sharing Model:</strong> The $BPAINT token is designed to enable revenue 
              sharing with contributors through dividend distributions. Token holders may receive dividends 
              based on platform revenues from subscriptions and marketplace fees.
            </p>
            <p>
              <strong>Trading & Liquidity:</strong> The $BPAINT token is intended to be freely tradable 
              on the Bitcoin Paint Exchange and associated platforms. We encourage an active secondary 
              market to provide liquidity and price discovery for creators' work.
            </p>
            <p>
              <strong>$BSHARE Fundraising:</strong> The Bitcoin Corporation LTD intends to issue $BSHARE 
              tokens as a fundraising mechanism. These tokens will represent participation in the platform's 
              success and may be offered through appropriate channels.
            </p>
            <p>
              By participating in the token ecosystem, you acknowledge that token allocation is discretionary, 
              regulatory frameworks may evolve, and you should conduct your own due diligence regarding 
              tax and legal implications in your jurisdiction.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Build the Future?</h2>
          <div className="cta-buttons">
            <a 
              href="https://github.com/bitcoin-apps-suite/bitcoin-paint" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-btn primary"
            >
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View on GitHub
            </a>
            <a 
              href="/bitcoin-paint" 
              className="cta-btn secondary"
            >
              Read Artist Docs
            </a>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    <Dock />
    </div>
  );
};

export default TokenPage;