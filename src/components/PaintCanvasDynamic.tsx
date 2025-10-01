'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

interface PaintCanvasProps {
  canvasWidth?: number;
  canvasHeight?: number;
}

const PaintCanvas: ComponentType<PaintCanvasProps> = dynamic(
  () => import('./AdvancedPaintCanvas').catch(() => {
    // If Konva fails, use HTML5 Canvas fallback
    console.log('Konva failed to load, using HTML5 Canvas fallback');
    return import('./FallbackCanvas');
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