'use client';

import './styles.css';
import Link from 'next/link';
import { useState } from 'react';
import { DEMChart, InSARChart, LandCoverChart } from '../components/MethodologyCharts';

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Geo-Síntesis</div>
          <div className="hidden md:flex space-x-8">
            <Link href="#metodologia" className="text-muted hover:text-secondary transition-colors">
              Metodología
            </Link>
            <Link href="#productos" className="text-muted hover:text-secondary transition-colors">
              Productos
            </Link>
            <Link 
              href="#contacto" 
              className="bg-secondary text-white py-2 px-4 rounded-full hover:bg-accent transition-colors"
            >
              Contacto
            </Link>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary focus:outline-none"
            aria-label="Menú"
          >
            <span className="text-3xl">☰</span>
          </button>
        </nav>
        <div 
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white py-4`}
          aria-expanded={isMobileMenuOpen}
        >
          <Link href="#metodologia" className="block text-center py-2 px-4 text-sm hover:bg-gray-100">
            Metodología
          </Link>
          <Link href="#productos" className="block text-center py-2 px-4 text-sm hover:bg-gray-100">
            Productos
          </Link>
          <Link href="#contacto" className="block text-center py-2 px-4 text-sm hover:bg-gray-100">
            Contacto
          </Link>
        </div>
      </header>

      <main>
        <section id="hero" className="bg-white">
          <div className="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight">
              Convirtiendo los datos del cielo en seguridad en la tierra
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted">
              Geo-Síntesis es una plataforma de inteligencia geoespacial basada en el uso conjunto 
              de datos satelitales, algoritmos avanzados y visualizaciones claras para anticipar y 
              comunicar riesgos naturales de forma eficiente.
            </p>
            <Link 
              href="#metodologia" 
              className="mt-8 inline-block bg-secondary text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-accent transition-colors"
            >
              Descubre Cómo
            </Link>
          </div>
        </section>

        <section id="metodologia" className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Nuestra Metodología Híbrida
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-muted">
                Integramos múltiples fuentes de datos de observación de la Tierra, incluyendo radar, 
                óptico, topografía y algoritmos de aprendizaje automático, para ofrecer productos 
                listos para la toma de decisiones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Topografía */}
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Topografía y Pendientes
                </h3>
                <p className="text-muted mb-6">
                  Evaluamos la morfología del terreno con datos DEM (30m y 10m), 
                  identificando cuencas de riesgo y laderas inestables.
                </p>
                <DEMChart />
              </div>

              {/* Radar */}
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform hover:-translate-y-2">
                <div className="text-5xl mb-4">📡</div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Radar e Inestabilidad
                </h3>
                <p className="text-muted mb-6">
                  Monitoreamos movimientos del suelo mediante interferometría (InSAR) 
                  basada en datos Sentinel-1 para alertas tempranas.
                </p>
                <InSARChart />
              </div>

              {/* Cobertura */}
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🌳</div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Cobertura Vegetal
                </h3>
                <p className="text-muted mb-6">
                  Identificamos cambios de uso del suelo y fragmentación mediante 
                  imágenes ópticas e índices como NDVI y NDWI.
                </p>
                <LandCoverChart />
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Nuestros Productos y Servicios
              </h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-muted">
                Nuestros productos transforman datos crudos en información estratégica, 
                ofreciendo distintas modalidades según el tipo de usuario, urgencia o área de estudio.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Producto 1 */}
              <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Análisis Puntuales
                </h3>
                <p className="mb-6 text-muted">
                  Informes individuales con mapas de riesgo, análisis geoespacial y conclusiones 
                  personalizadas, ideales para evaluaciones previas a proyectos.
                </p>
                <ul className="space-y-3 text-left text-muted">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Mapa de Susceptibilidad a Deslizamientos
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Mapa de Llanuras de Inundación
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Informe InSAR de Estabilidad Histórica
                  </li>
                </ul>
              </div>

              {/* Producto 2 */}
              <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-secondary">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Monitoreo Continuo
                </h3>
                <p className="mb-6 text-muted">
                  Dashboard web con visualización dinámica de riesgos. Ideal para gobiernos 
                  locales, aseguradoras y empresas de infraestructura.
                </p>
                <ul className="space-y-3 text-left text-muted">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Mapa actualizado periódicamente (nivel parroquial o por coordenadas)
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    API REST para consumir puntajes de riesgo
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Alertas automatizadas por umbrales críticos
                  </li>
                </ul>
              </div>

              {/* Producto 3 */}
              <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Comparativos Territoriales
                </h3>
                <p className="mb-6 text-muted">
                  Análisis multicriterio para comparar sitios de inversión, licitación o 
                  urbanización según múltiples factores de riesgo.
                </p>
                <ul className="space-y-3 text-left text-muted">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Hasta 3 ubicaciones comparadas
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Matriz de decisión visual (dashboard o PDF)
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✔</span>
                    Recomendación basada en criterios ponderados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white mt-auto">
        <div className="container mx-auto px-6 py-8 text-center">
          <p>&copy; 2025 Geo-Síntesis. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">
            Transformando datos en decisiones para un mundo más seguro.
          </p>
        </div>
      </footer>
    </div>
  );
}
