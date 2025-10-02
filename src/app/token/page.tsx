'use client';

import { Coins, TrendingUp, Users, Shield, Zap, Palette } from 'lucide-react';
import PaintHeader from '@/components/PaintHeader';

export default function TokenPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000000',
      color: '#ffffff'
    }}>
      <PaintHeader />
      
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(220, 38, 38, 0.3)'
            }}>
              <Coins size={40} color="white" />
            </div>
            <h1 style={{ 
              fontSize: '64px', 
              fontWeight: 'bold', 
              background: 'linear-gradient(90deg, #ff9500 0%, #DC2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0
            }}>
              $BPAINT
            </h1>
          </div>
          
          <p style={{ 
            fontSize: '24px', 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            The native utility token powering the Bitcoin Paint ecosystem. 
            Earn, stake, and govern the future of digital art.
          </p>
        </div>

        {/* Token Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
            border: '1px solid rgba(220, 38, 38, 0.2)',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '8px' }}>
              Total Supply
            </h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#DC2626' }}>
              1B BPAINT
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
            border: '1px solid rgba(255, 149, 0, 0.2)',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '8px' }}>
              Current Price
            </h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff9500' }}>
              $0.0085
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
            border: '1px solid rgba(220, 38, 38, 0.2)',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '8px' }}>
              Market Cap
            </h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#DC2626' }}>
              $8.5M
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
            border: '1px solid rgba(255, 149, 0, 0.2)',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '8px' }}>
              Holders
            </h3>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff9500' }}>
              15,247
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ 
            fontSize: '40px', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '50px',
            color: '#ffffff'
          }}>
            $BPAINT Use Cases
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <Palette size={60} color="white" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Canvas Fees
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
                Pay for premium features, advanced tools, and cloud storage 
                using $BPAINT tokens at discounted rates.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #ff9500 0%, #e6850e 100%)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <TrendingUp size={60} color="white" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Staking Rewards
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
                Stake your tokens to earn rewards from platform fees 
                and participate in exclusive artist programs.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <Users size={60} color="white" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Governance
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
                Vote on platform improvements, feature requests, 
                and community initiatives that shape the ecosystem.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #ff9500 0%, #e6850e 100%)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <Shield size={60} color="white" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                NFT Minting
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
                Use $BPAINT to mint your artworks as NFTs 
                with reduced fees and priority processing.
              </p>
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          borderRadius: '20px',
          padding: '50px',
          marginBottom: '60px'
        }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '40px',
            color: '#DC2626'
          }}>
            Tokenomics
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9500', marginBottom: '8px' }}>
                40%
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Community Rewards
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Artist incentives and ecosystem growth
              </p>
            </div>
            
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#DC2626', marginBottom: '8px' }}>
                25%
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Development
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Platform development and maintenance
              </p>
            </div>
            
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9500', marginBottom: '8px' }}>
                20%
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Public Sale
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Fair distribution to early adopters
              </p>
            </div>
            
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#DC2626', marginBottom: '8px' }}>
                15%
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Team & Advisors
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Vested over 3 years with 1-year cliff
              </p>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
          borderRadius: '20px',
          padding: '50px'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: '#ffffff'
          }}>
            Get $BPAINT Tokens
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px',
            maxWidth: '500px',
            margin: '0 auto 30px auto'
          }}>
            Start earning $BPAINT by creating and sharing your artwork, 
            or purchase tokens to unlock premium features.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{
                background: '#ffffff',
                color: '#DC2626',
                padding: '12px 32px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => window.location.href = '/'}
            >
              Start Painting & Earning
            </button>
            <button
              style={{
                background: 'transparent',
                color: '#ffffff',
                padding: '12px 32px',
                borderRadius: '8px',
                border: '2px solid #ffffff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => window.location.href = '/exchange'}
            >
              Buy $BPAINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}