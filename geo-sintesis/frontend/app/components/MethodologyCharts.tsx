'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const baseChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { 
      display: false,
      position: 'bottom' as const,
      labels: { 
        color: '#6C757D',
        font: {
          size: 12,
          weight: 400
        }
      }
    },
    title: {
      display: true,
      color: '#0A4B7A',
      font: {
        size: 16,
        weight: 700
      }
    }
  },
  scales: {
    y: {
      grid: { color: '#e2e8f0' },
      ticks: { 
        color: '#6C757D',
        font: {
          size: 12,
          weight: 400
        }
      }
    },
    x: {
      grid: { display: false },
      ticks: { 
        color: '#6C757D',
        font: {
          size: 12,
          weight: 400
        }
      }
    }
  }
} as const;

export function DEMChart() {
  const data = {
    labels: ['GLO-90 (Baja)', 'GLO-30 (Media)', 'EEA-10 (Alta)'],
    datasets: [{
      label: 'Precisión del Relieve',
      data: [30, 70, 95],
      backgroundColor: ['#6C757D', '#26C4D9', '#2A9D8F'],
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  };

  return (
    <div className="h-60">
      <Bar 
        options={{
          ...baseChartOptions,
          plugins: {
            ...baseChartOptions.plugins,
            title: {
              ...baseChartOptions.plugins.title,
              text: 'Precisión vs. Resolución DEM'
            }
          }
        }} 
        data={data}
      />
    </div>
  );
}

export function InSARChart() {
  const data = {
    labels: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5'],
    datasets: [{
      label: 'Deformación del Terreno (mm)',
      data: [0.5, 0.2, -1.5, -3.2, -5.8],
      fill: true,
      borderColor: '#00A5CF',
      backgroundColor: 'rgba(0, 165, 207, 0.1)',
      tension: 0.3,
      pointBackgroundColor: '#00A5CF',
      pointRadius: 5
    }]
  };

  return (
    <div className="h-60">
      <Line 
        options={{
          ...baseChartOptions,
          plugins: {
            ...baseChartOptions.plugins,
            title: {
              ...baseChartOptions.plugins.title,
              text: 'Monitoreo de Estabilidad (InSAR)'
            }
          }
        }} 
        data={data}
      />
    </div>
  );
}

export function LandCoverChart() {
  const data = {
    labels: ['Bosque Nativo', 'Zona Urbana', 'Agricultura', 'Suelo Desnudo'],
    datasets: [{
      label: 'Cobertura del Suelo',
      data: [45, 25, 20, 10],
      backgroundColor: ['#2A9D8F', '#6C757D', '#9FFFCB', '#00A5CF'],
      borderColor: '#ffffff',
      borderWidth: 4,
      hoverOffset: 8
    }]
  };

  return (
    <div className="h-60">
      <Doughnut 
        options={{
          ...baseChartOptions,
          plugins: {
            ...baseChartOptions.plugins,
            legend: {
              ...baseChartOptions.plugins.legend,
              display: true
            },
            title: {
              ...baseChartOptions.plugins.title,
              text: 'Análisis de Cobertura Terrestre'
            }
          }
        }} 
        data={data}
      />
    </div>
  );
}
