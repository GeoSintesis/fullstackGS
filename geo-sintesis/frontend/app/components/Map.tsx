'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

interface MapProps {
  onPolygonDrawn: (coordinates: number[][]) => void;
}

export default function Map({ onPolygonDrawn }: MapProps) {
  useEffect(() => {
    // Fix Leaflet's icon paths
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const handleCreated = (e: any) => {
    const layer = e.layer;
    if (layer) {
      const coords = layer.getLatLngs()[0].map((latLng: any) => [
        latLng.lat,
        latLng.lng,
      ]);
      onPolygonDrawn(coords);
    }
  };

  return (
    <MapContainer
      center={[-1.8312, -78.1834]}
      zoom={6}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup>
        <EditControl
          position="topright"
          onCreated={handleCreated}
          draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon: {
              allowIntersection: false,
              drawError: {
                color: '#e1e4e8',
                message: '<strong>¡Error!</strong> No se permiten polígonos que se intersecten',
              },
              shapeOptions: {
                color: '#2A9D8F',
              },
            },
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
}
