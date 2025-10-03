'use client';

import React, { useState } from 'react';
import './exchange.css';

const NFTExchangePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'marketplace' | 'my-nfts' | 'create'>('marketplace');

  return (
    <div className="nft-exchange-page">
      {/* Header */}
      <header className="exchange-header">
        <div className="exchange-header-content">
          <div className="exchange-title">
            <span className="bitcoin-symbol">₿</span>
            <h1>PAINT EXCHANGE</h1>
            <span className="subtitle">Decentralized NFT Marketplace</span>
          </div>
          
          <div className="exchange-stats">
            <div className="stat-item">
              <div className="stat-value">12,847</div>
              <div className="stat-label">Artworks</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">₿ 234.5</div>
              <div className="stat-label">Volume</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3,492</div>
              <div className="stat-label">Artists</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="exchange-nav">
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${selectedTab === 'marketplace' ? 'active' : ''}`}
            onClick={() => setSelectedTab('marketplace')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Marketplace
          </button>
          <button 
            className={`nav-tab ${selectedTab === 'my-nfts' ? 'active' : ''}`}
            onClick={() => setSelectedTab('my-nfts')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            My NFTs
          </button>
          <button 
            className={`nav-tab ${selectedTab === 'create' ? 'active' : ''}`}
            onClick={() => setSelectedTab('create')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create
          </button>
        </div>
        
        <div className="exchange-filters">
          <select className="filter-select">
            <option>All Categories</option>
            <option>Digital Art</option>
            <option>Abstract</option>
            <option>Portraits</option>
            <option>Landscapes</option>
          </select>
          <select className="filter-select">
            <option>Sort by: Latest</option>
            <option>Sort by: Price Low</option>
            <option>Sort by: Price High</option>
            <option>Sort by: Most Popular</option>
          </select>
        </div>
      </nav>

      {/* Main Content */}
      <main className="exchange-main">
        {selectedTab === 'marketplace' && (
          <div className="marketplace-content">
            <div className="featured-banner">
              <div className="featured-content">
                <div className="featured-text">
                  <h2>Featured Collection</h2>
                  <h3>"Digital Dreams"</h3>
                  <p>Exclusive artwork by renowned digital artist Maya Chen</p>
                  <button className="featured-cta">View Collection</button>
                </div>
                <div className="featured-image">
                  <div className="featured-artwork"></div>
                </div>
              </div>
            </div>

            <div className="nft-grid">
              {/* NFT Item 1 */}
              <div className="nft-item">
                <div className="nft-image">
                  <div className="nft-artwork abstract-1"></div>
                  <div className="nft-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="nft-details">
                  <h3 className="nft-title">Cosmic Waves</h3>
                  <p className="nft-artist">by @digitalArtist</p>
                  <div className="nft-price">
                    <span className="current-price">₿ 0.05</span>
                    <span className="usd-price">($2,250)</span>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>

              {/* NFT Item 2 */}
              <div className="nft-item">
                <div className="nft-image">
                  <div className="nft-artwork abstract-2"></div>
                  <div className="nft-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="nft-details">
                  <h3 className="nft-title">Neon Dreams</h3>
                  <p className="nft-artist">by @neonmaster</p>
                  <div className="nft-price">
                    <span className="current-price">₿ 0.08</span>
                    <span className="usd-price">($3,600)</span>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>

              {/* NFT Item 3 */}
              <div className="nft-item">
                <div className="nft-image">
                  <div className="nft-artwork abstract-3"></div>
                  <div className="nft-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="nft-details">
                  <h3 className="nft-title">Purple Haze</h3>
                  <p className="nft-artist">by @purplewave</p>
                  <div className="nft-price">
                    <span className="current-price">₿ 0.03</span>
                    <span className="usd-price">($1,350)</span>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>

              {/* NFT Item 4 */}
              <div className="nft-item">
                <div className="nft-image">
                  <div className="nft-artwork abstract-4"></div>
                  <div className="nft-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="nft-details">
                  <h3 className="nft-title">Electric Storm</h3>
                  <p className="nft-artist">by @stormrider</p>
                  <div className="nft-price">
                    <span className="current-price">₿ 0.12</span>
                    <span className="usd-price">($5,400)</span>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>

              {/* NFT Item 5 */}
              <div className="nft-item">
                <div className="nft-image">
                  <div className="nft-artwork abstract-5"></div>
                  <div className="nft-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="nft-details">
                  <h3 className="nft-title">Digital Sunset</h3>
                  <p className="nft-artist">by @sunsetart</p>
                  <div className="nft-price">
                    <span className="current-price">₿ 0.07</span>
                    <span className="usd-price">($3,150)</span>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>

              {/* NFT Item 6 */}
              <div className="nft-item">
                <div className="nft-image">
                  <div className="nft-artwork abstract-6"></div>
                  <div className="nft-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                <div className="nft-details">
                  <h3 className="nft-title">Quantum Field</h3>
                  <p className="nft-artist">by @quantumart</p>
                  <div className="nft-price">
                    <span className="current-price">₿ 0.15</span>
                    <span className="usd-price">($6,750)</span>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'my-nfts' && (
          <div className="my-nfts-content">
            <div className="my-nfts-header">
              <h2>My NFT Collection</h2>
              <p>Manage your digital artwork collection and listings</p>
            </div>
            
            <div className="portfolio-stats">
              <div className="portfolio-stat">
                <div className="stat-value">24</div>
                <div className="stat-label">Owned NFTs</div>
              </div>
              <div className="portfolio-stat">
                <div className="stat-value">₿ 1.2</div>
                <div className="stat-label">Total Value</div>
              </div>
              <div className="portfolio-stat">
                <div className="stat-value">6</div>
                <div className="stat-label">Listed</div>
              </div>
            </div>

            <div className="my-nfts-grid">
              <div className="my-nft-item">
                <div className="my-nft-image">
                  <div className="nft-artwork abstract-1"></div>
                  <div className="listing-badge">Listed</div>
                </div>
                <div className="my-nft-details">
                  <h3>My Cosmic Wave</h3>
                  <p>Listed for ₿ 0.05</p>
                  <div className="nft-actions">
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn delist">Delist</button>
                  </div>
                </div>
              </div>

              <div className="my-nft-item">
                <div className="my-nft-image">
                  <div className="nft-artwork abstract-2"></div>
                </div>
                <div className="my-nft-details">
                  <h3>Abstract Mind</h3>
                  <p>Not listed</p>
                  <div className="nft-actions">
                    <button className="action-btn list">List for Sale</button>
                    <button className="action-btn transfer">Transfer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'create' && (
          <div className="create-content">
            <div className="create-header">
              <h2>Mint New NFT</h2>
              <p>Turn your digital artwork into a tradeable NFT on the Bitcoin blockchain</p>
            </div>

            <div className="create-form">
              <div className="form-section">
                <h3>Artwork Details</h3>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" placeholder="Enter artwork title" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea placeholder="Describe your artwork"></textarea>
                </div>
                <div className="form-group">
                  <label>Upload Artwork</label>
                  <div className="upload-area">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p>Drop your artwork here or click to browse</p>
                    <span>Supports: JPG, PNG, GIF, MP4 (Max 100MB)</span>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Pricing & Royalties</h3>
                <div className="form-group">
                  <label>Initial Price (BTC)</label>
                  <input type="number" step="0.001" placeholder="0.000" />
                </div>
                <div className="form-group">
                  <label>Creator Royalty (%)</label>
                  <input type="number" min="0" max="10" placeholder="5" />
                </div>
                <div className="form-group">
                  <label>Collection</label>
                  <select>
                    <option>Select Collection</option>
                    <option>My Abstract Art</option>
                    <option>Digital Landscapes</option>
                    <option>Create New Collection</option>
                  </select>
                </div>
              </div>

              <div className="form-section">
                <h3>Blockchain Details</h3>
                <div className="blockchain-info">
                  <div className="info-item">
                    <span className="info-label">Network:</span>
                    <span className="info-value">Bitcoin SV</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Minting Fee:</span>
                    <span className="info-value">₿ 0.001</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Transaction Fee:</span>
                    <span className="info-value">₿ 0.0001</span>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button className="preview-btn">Preview NFT</button>
                <button className="mint-btn">Mint NFT</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer CTA */}
      <section className="exchange-footer-cta">
        <div className="cta-content">
          <h2>Ready to Start Trading?</h2>
          <p>Join thousands of artists and collectors in the world's first Bitcoin-native NFT marketplace</p>
          <div className="cta-buttons">
            <button className="cta-primary">Connect Wallet</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NFTExchangePage;