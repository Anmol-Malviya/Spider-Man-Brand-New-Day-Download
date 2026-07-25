'use client';
import { useState } from 'react';

export default function AdblockWall() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div style={{ display: 'none' }}>
      {/* Optional adblock trigger element */}
    </div>
  );
}
