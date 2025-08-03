'use client';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ControlPanelProps {
  coordinates: number[][] | null;
  selectedService: string | null;
  onServiceSelect: (serviceId: string) => void;
}

const services: Service[] = [
  {
    id: 'analisis',
    icon: '📄',
    title: 'Análisis Puntuales',
    description: 'Informes detallados en PDF para evaluar riesgos en áreas específicas.'
  },
  {
    id: 'monitoreo',
    icon: '📊',
    title: 'Monitoreo Continuo',
    description: 'Dashboard interactivo con mapas de riesgo actualizados periódicamente.'
  },
  {
    id: 'comparativo',
    icon: '🗺️',
    title: 'Comparativos Territoriales',
    description: 'Evaluación comparativa de riesgos entre múltiples sitios para decisiones de inversión.'
  }
];

export default function ControlPanel({
  coordinates,
  selectedService,
  onServiceSelect
}: ControlPanelProps) {
  return (
    <div className="h-screen w-full md:w-[35%] bg-slate-50 p-6 overflow-y-auto">
      <div className="space-y-6">
        {/* Sección 1: Título y Descripción */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">
            Panel de Análisis Geo-Síntesis
          </h1>
          <p className="mt-2 text-muted">
            Defina su área y seleccione un servicio para comenzar
          </p>
        </div>

        {/* Sección 2: Área de Interés */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Coordenadas del Polígono
          </h2>
          <textarea
            className="w-full h-24 p-2 text-sm font-mono bg-gray-50 rounded border border-gray-200"
            value={coordinates ? JSON.stringify(coordinates, null, 2) : 'Dibuja un polígono en el mapa para definir tu área de interés'}
            readOnly
          />
        </div>

        {/* Sección 3: Selección de Servicios */}
        <div>
          <h2 className="text-lg font-semibold text-primary mb-4">
            Seleccione un Servicio
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceSelect(service.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedService === service.id
                    ? 'border-secondary bg-secondary/5'
                    : 'border-gray-200 hover:border-accent'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <h3 className="font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
