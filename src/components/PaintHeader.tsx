'use client';

import { useState } from 'react';
import { Palette, Bitcoin } from 'lucide-react';

interface PaintHeaderProps {
  onTitleClick?: () => void;
}

export default function PaintHeader({ onTitleClick }: PaintHeaderProps) {
  return (
    <header
      style={{
        height: '80px',
        background: '#000000',
        borderBottom: '1px solid rgba(220, 38, 38, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        position: 'relative',
      }}
    >
      {/* Logo and Title Section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          cursor: onTitleClick ? 'pointer' : 'default',
        }}
        onClick={onTitleClick}
      >
        {/* Logo */}
        <div
          style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(220, 38, 38, 0.3)',
          }}
        >
          <Palette size={28} color="white" />
        </div>

        {/* Title and Subtitle */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            margin: 0,
            background: 'linear-gradient(90deg, #ff9500 0%, #ffffff 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            <span style={{ color: '#ff9500' }}>Bitcoin</span>
            <span style={{ color: '#DC2626', marginLeft: '8px' }}>Paint</span>
          </h1>
          <p style={{ 
            fontSize: '14px', 
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '4px 0 0 0',
            fontWeight: '400',
          }}>
            Create, publish and sell shares in your art
          </p>
        </div>
      </div>

      {/* Bitcoin Symbol */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          fontSize: '20px',
          color: '#ff9500',
          fontWeight: 'bold',
        }}
      >
        ₿
      </div>
    </header>
  );
}