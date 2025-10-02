'use client';

import { Book, Code, Video, Users, MessageCircle, ExternalLink } from 'lucide-react';
import PaintHeader from '@/components/PaintHeader';

export default function DocsPage() {
  const sections = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of Bitcoin Paint and create your first artwork.',
      links: [
        { title: 'Quick Start Guide', url: '/docs/quickstart' },
        { title: 'Interface Overview', url: '/docs/interface' },
        { title: 'Creating Your First Painting', url: '/docs/first-painting' }
      ]
    },
    {
      icon: Code,
      title: 'Advanced Features',
      description: 'Master professional tools and blockchain integration.',
      links: [
        { title: 'Layer Management', url: '/docs/layers' },
        { title: 'Custom Brushes', url: '/docs/brushes' },
        { title: 'Blockchain Publishing', url: '/docs/blockchain' }
      ]
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides and tutorials.',
      links: [
        { title: 'Basic Painting Techniques', url: '/docs/tutorials/basics' },
        { title: 'NFT Creation Process', url: '/docs/tutorials/nft' },
        { title: 'Collaborative Painting', url: '/docs/tutorials/collaboration' }
      ]
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
            Documentation
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Everything you need to master Bitcoin Paint and create amazing digital artwork.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {sections.map((section, index) => (
            <div 
              key={index}
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
                border: '1px solid rgba(220, 38, 38, 0.2)',
                borderRadius: '16px',
                padding: '30px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <section.icon size={24} color="white" />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>
                  {section.title}
                </h3>
              </div>
              
              <p style={{ 
                fontSize: '16px', 
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                {section.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: 'rgba(220, 38, 38, 0.1)',
                      border: '1px solid rgba(220, 38, 38, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(220, 38, 38, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.2)';
                    }}
                  >
                    <span>{link.title}</span>
                    <ExternalLink size={16} color="#DC2626" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div style={{
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', color: '#ffffff' }}>
            Need Help?
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px auto'
          }}>
            Our community is here to help! Join our Discord, follow us on social media, 
            or contact our support team.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#DC2626',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              <MessageCircle size={20} />
              Join Discord
            </button>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '2px solid #ffffff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              <Users size={20} />
              Community Forum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}