'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

interface PaintCanvasProps {
  canvasWidth?: number;
  canvasHeight?: number;
}

const PaintCanvas: ComponentType<PaintCanvasProps> = dynamic(
  () => import('./PaintCanvas').catch(() => {
    // Return a fallback component if the import fails
    return {
      default: () => (
        <div 
          style={{
            width: '100%',
            height: '600px',
            background: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ff6b6b',
            border: '1px solid rgba(255, 107, 107, 0.2)',
            borderRadius: '8px',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div>Canvas failed to load</div>
          <div style={{ fontSize: '14px', opacity: 0.7 }}>
            Paint functionality temporarily unavailable
          </div>
        </div>
      )
    };
  }),
  { 
    ssr: false,
    loading: () => (
      <div 
        style={{
          width: '100%',
          height: '600px',
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#888',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '8px'
        }}
      >
        Loading Canvas...
      </div>
    )
  }
);

export default PaintCanvas;