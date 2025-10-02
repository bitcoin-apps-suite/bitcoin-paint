'use client';

import { Shield, Globe, Zap, Users, Code, Palette } from 'lucide-react';
import PaintHeader from '@/components/PaintHeader';

export default function PlatformPage() {
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
          <h1 style={{ 
            fontSize: '56px', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            background: 'linear-gradient(90deg, #ff9500 0%, #DC2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            About Bitcoin Paint
          </h1>
          <p style={{ 
            fontSize: '24px', 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            The future of digital art creation, ownership, and monetization powered by Bitcoin blockchain technology.
          </p>
        </div>

        {/* Mission Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          borderRadius: '20px',
          padding: '50px',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#DC2626'
          }}>
            Our Mission
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            To empower digital artists with professional-grade tools while providing 
            unprecedented security, ownership, and monetization opportunities through 
            Bitcoin blockchain integration.
          </p>
        </div>

        {/* Platform Features */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ 
            fontSize: '40px', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '50px',
            color: '#ffffff'
          }}>
            Why Choose Bitcoin Paint?
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
              <Shield size={60} color="white" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Blockchain Security
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
                Your artwork is permanently secured on the Bitcoin blockchain, 
                providing immutable proof of creation and ownership.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #ff9500 0%, #e6850e 100%)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <Palette size={60} color="white" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Professional Tools
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
                Advanced painting features including layers, custom brushes, 
                effects, and AI-powered assistance for professional results.
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
                Artist Community
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.9)' }}>
                Connect with artists worldwide, collaborate on projects, 
                and participate in a thriving creative ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          border: '1px solid rgba(255, 149, 0, 0.2)',
          borderRadius: '20px',
          padding: '50px',
          marginBottom: '60px'
        }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '40px',
            color: '#ff9500'
          }}>
            Built on Bitcoin
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div>
              <Globe size={40} color="#ff9500" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Decentralized
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                No central authority controls your art
              </p>
            </div>
            
            <div>
              <Shield size={40} color="#DC2626" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Immutable
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Permanent proof of creation timestamp
              </p>
            </div>
            
            <div>
              <Zap size={40} color="#ff9500" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Lightning Fast
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Instant transactions and publishing
              </p>
            </div>
            
            <div>
              <Code size={40} color="#DC2626" style={{ marginBottom: '16px' }} />
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Open Source
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Transparent and community-driven
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            Built by Artists, for Artists
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our team combines decades of experience in digital art, blockchain technology, 
            and user experience design to create the ultimate platform for digital creators.
          </p>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
          borderRadius: '20px',
          padding: '50px',
          marginTop: '60px'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: '#ffffff'
          }}>
            Join the Revolution
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px',
            maxWidth: '500px',
            margin: '0 auto 30px auto'
          }}>
            Be part of the future of digital art. Create, own, and profit from your 
            artwork like never before.
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
              Start Creating
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
              onClick={() => window.location.href = '/docs'}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}