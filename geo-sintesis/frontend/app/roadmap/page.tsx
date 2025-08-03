'use client';

import './styles.css';

export default function RoadmapPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-7xl">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight">
          Hoja de Ruta Tecnológica de Geo-Síntesis
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted max-w-3xl mx-auto">
          De un prototipo de hackathon a una plataforma de inteligencia geoespacial escalable: 
          nuestra estrategia para construir una solución robusta y de referencia en la región.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <section id="phase-1" className="w-full">
          <div className="card phase-card phase-1-border shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="icon-circle bg-accent mr-4">
                <span>🚀</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Fase 1: Exploración y Prototipado
                </h2>
                <p className="text-md text-muted font-semibold">
                  Etapa del Hackathon: Velocidad y Validación Visual
                </p>
              </div>
            </div>
            <p className="mb-8 text-gray-700">
              En esta fase inicial, nuestro objetivo es construir rápidamente un prototipo funcional que demuestre el valor de nuestra idea. 
              La velocidad y la capacidad de generar resultados visuales claros son la máxima prioridad.
            </p>

            <div className="space-y-6">
              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Herramienta Principal: Sentinel Hub APIs
                </h3>
                <p className="text-sm text-muted mb-3">
                  Un conjunto de servicios RESTful para acceso rápido y directo a los datos de Copernicus, 
                  ideal para generar imágenes y obtener datos numéricos de forma eficiente.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full font-semibold">
                    🖼️ Process API
                  </span>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-semibold">
                    📊 Statistical API
                  </span>
                </div>
              </div>

              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Herramienta de Soporte: APIs de Catálogo
                </h3>
                <p className="text-sm text-muted mb-3">
                  Actúan como el motor de búsqueda del ecosistema, permitiéndonos encontrar y filtrar los datos 
                  exactos que necesitamos antes de procesarlos, automatizando nuestro flujo de trabajo.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <span className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full font-semibold">
                    🔍 STAC
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full font-semibold">
                    📂 OData
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="timeline-arrow md:hidden">
          <div className="arrow-down"></div>
        </div>

        <section id="phase-2" className="w-full">
          <div className="card phase-card phase-2-border shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="icon-circle bg-secondary mr-4">
                <span>🌐</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Fase 2: Escalabilidad y Producto
                </h2>
                <p className="text-md text-muted font-semibold">
                  Post-Hackathon: Robustez y Automatización
                </p>
              </div>
            </div>
            <p className="mb-8 text-gray-700">
              Una vez validada la idea, el enfoque cambia hacia la construcción de un producto robusto, 
              automatizado y capaz de servir a múltiples clientes, garantizando la eficiencia y la escalabilidad.
            </p>

            <div className="space-y-6">
              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Herramienta Principal: openEO
                </h3>
                <p className="text-sm text-muted mb-3">
                  Un estándar abierto para ejecutar análisis complejos y flujos de trabajo completos directamente en la nube. 
                  En lugar de pedir una imagen, solicitamos el resultado de una "receta" de análisis.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <span className="bg-teal-100 text-teal-800 py-1 px-3 rounded-full font-semibold">
                    ⚙️ Automatización
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full font-semibold">
                    📈 Escalabilidad
                  </span>
                </div>
              </div>

              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Herramienta de Soporte: OGC Services
                </h3>
                <p className="text-sm text-muted mb-3">
                  Estándares para servir datos geoespaciales en la web (WMS/WCS), permitiendo que nuestros clientes 
                  técnicos integren nuestros análisis directamente en su software GIS (QGIS, ArcGIS).
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <span className="bg-pink-100 text-pink-800 py-1 px-3 rounded-full font-semibold">
                    🔄 Interoperabilidad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-12 md:mt-16 pt-8 border-t-2 border-gray-200">
        <p className="text-lg font-bold text-primary">Una Visión Potente y Viable</p>
        <p className="mt-2 text-muted max-w-3xl mx-auto">
          Esta hoja de ruta demuestra una estrategia clara: comenzamos con un prototipo 
          funcional usando las <strong>APIs de Sentinel Hub</strong> y tenemos un plan 
          definido para evolucionar hacia una plataforma de nivel empresarial utilizando{' '}
          <strong>openEO</strong> y los estándares <strong>OGC</strong>. Esta es la visión 
          que demuestra el verdadero potencial de <strong>Geo-Síntesis</strong>.
        </p>
      </footer>
    </div>
  );
}
