'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(
  () => import('./Map'),
  { ssr: false }
);

interface InteractiveMapProps {
  onPolygonDrawn: (coordinates: number[][]) => void;
}

export default function InteractiveMap({ onPolygonDrawn }: InteractiveMapProps) {
  return (
    <div className="h-screen w-full">
      <Map onPolygonDrawn={onPolygonDrawn} />
    </div>
  );
}
