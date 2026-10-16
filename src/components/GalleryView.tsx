'use client';

import SaveOnChain from './SaveOnChain';

/** Your paintings: read back from your own wallet, where Save on-chain keeps them. No sample art. */
export default function GalleryView() {
  return (
    <div style={{ padding: '32px 24px' }}>
      <SaveOnChain accept="image/*" noun="painting" title="Your paintings" />
    </div>
  );
}
