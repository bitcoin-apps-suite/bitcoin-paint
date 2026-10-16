'use client';

import React from 'react';
import Link from 'next/link';
import './exchange.css';

const NFTExchangePage: React.FC = () => {
  return (
    <div className="nft-exchange-page">
      <header className="exchange-header">
        <div className="exchange-header-content">
          <div className="exchange-title">
            <span className="bitcoin-symbol">₿</span>
            <h1>PAINT EXCHANGE</h1>
            <span className="subtitle">Paintings saved on-chain</span>
          </div>
        </div>
      </header>
      <section style={{ padding: '48px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.75)' }}>
        <p>No paintings are listed yet. Paint something and save it on-chain from your own wallet.</p>
        <p style={{ marginTop: '16px' }}>
          <Link href="/" style={{ textDecoration: 'underline' }}>
            Open the studio
          </Link>
        </p>
      </section>
    </div>
  );
};

export default NFTExchangePage;
