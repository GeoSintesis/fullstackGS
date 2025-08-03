'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import ControlPanel from '../components/ControlPanel';

// Importación dinámica del mapa para evitar errores de SSR
const InteractiveMap = dynamic(
  () => import('../components/InteractiveMap'),
  { ssr: false }
);

export default function MapPage() {
  const [coordinates, setCoordinates] = useState<number[][] | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handlePolygonDrawn = (coords: number[][]) => {
    setCoordinates(coords);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100">
      <ControlPanel
        coordinates={coordinates}
        selectedService={selectedService}
        onServiceSelect={handleServiceSelect}
      />
      <div className="flex-1 relative">
        <InteractiveMap onPolygonDrawn={handlePolygonDrawn} />
      </div>
    </div>
  );
}
