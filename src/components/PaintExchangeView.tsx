'use client';

/** $bPaint exchange: nothing is listed or traded yet, so show that plainly (no made-up prices). */
export default function PaintExchangeView() {
  return (
    <div style={{ padding: '48px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
      <h2 style={{ fontSize: '24px', color: '#fff', marginBottom: '12px' }}>Paint Exchange</h2>
      <p>No paint tokens are trading yet. When they are, prices and trades will show here and settle from your own wallet.</p>
    </div>
  );
}
