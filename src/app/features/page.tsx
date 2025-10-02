'use client';

import { Palette, Brush, Download, Shield, Coins, Layers, Zap, Users } from 'lucide-react';
import PaintHeader from '@/components/PaintHeader';

export default function FeaturesPage() {
  const features = [
    {
      icon: Palette,
      title: 'Advanced Paint Studio',
      description: 'Professional-grade digital painting tools with brushes, layers, and effects.',
      color: '#DC2626'
    },
    {
      icon: Shield,
      title: 'Blockchain Publishing',
      description: 'Secure your artwork on the Bitcoin blockchain with timestamped proofs.',
      color: '#ff9500'
    },
    {
      icon: Coins,
      title: 'NFT Creation',
      description: 'Transform your paintings into tradeable NFTs with built-in marketplace.',
      color: '#DC2626'
    },
    {
      icon: Download,
      title: 'Multiple Export Formats',
      description: 'Export in PNG, JPG, SVG, or as blockchain-secured art tokens.',
      color: '#ff9500'
    },
    {
      icon: Layers,
      title: 'Layer Management',
      description: 'Professional layer system for complex artwork creation and editing.',
      color: '#DC2626'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together on paintings with live collaborative editing features.',
      color: '#ff9500'
    },
    {
      icon: Users,
      title: 'Artist Community',
      description: 'Connect with other artists, share work, and earn from your creations.',
      color: '#DC2626'
    },
    {
      icon: Brush,
      title: 'AI-Powered Tools',
      description: 'Smart brushes and AI assistance to enhance your artistic workflow.',
      color: '#ff9500'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000000',
      color: '#ffffff'
    }}>
      <PaintHeader />
      
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            background: 'linear-gradient(90deg, #ff9500 0%, #DC2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Powerful Features for Digital Artists
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Bitcoin Paint combines professional painting tools with blockchain technology 
            to revolutionize how artists create, protect, and monetize their work.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
                border: `1px solid ${feature.color}20`,
                borderRadius: '16px',
                padding: '30px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${feature.color}40`;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${feature.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${feature.color}20`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <feature.icon size={30} color="white" />
              </div>
              
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                marginBottom: '12px',
                color: feature.color
              }}>
                {feature.title}
              </h3>
              
              <p style={{ 
                fontSize: '16px', 
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
          borderRadius: '20px',
          padding: '40px',
          marginTop: '60px'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: '#ffffff'
          }}>
            Ready to Start Creating?
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px',
            maxWidth: '500px',
            margin: '0 auto 30px auto'
          }}>
            Join thousands of artists already using Bitcoin Paint to create, 
            protect, and profit from their digital artwork.
          </p>
          <button
            style={{
              background: '#ffffff',
              color: '#DC2626',
              padding: '12px 32px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => window.location.href = '/'}
          >
            Start Painting Now
          </button>
        </div>
      </div>
    </div>
  );
}