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
        {/* Fase 1 */}
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
              Construcción rápida de un prototipo funcional que demuestre el valor de la idea. 
              El enfoque está en generar resultados visuales claros y aprovechar herramientas que aceleren el desarrollo.
            </p>

            <div className="space-y-6">
              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Herramientas Principales: Sentinel Hub y openEO
                </h3>
                <p className="text-sm text-muted mb-3">
                  Se utilizan ambas herramientas en combinación, eligiendo según la tarea específica: Sentinel Hub 
                  para visualización y estadísticas rápidas, y openEO para flujos de procesamiento más complejos en la nube.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="badge bg-blue-100 text-blue-800">🖼️ Process API</span>
                  <span className="badge bg-green-100 text-green-800">📊 Statistical API</span>
                  <span className="badge bg-teal-100 text-teal-800">⚙️ openEO Python Client</span>
                </div>
              </div>

              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Backend y Procesamiento
                </h3>
                <p className="text-sm text-muted mb-3">
                  FastAPI para servir la lógica de negocio y Python para realizar el procesamiento de datos e integración 
                  con APIs externas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="timeline-arrow md:hidden">
          <div className="arrow-down"></div>
        </div>

        {/* Fase 2 */}
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
              En esta etapa se construye una arquitectura más robusta, con automatización, procesamiento escalable y capacidades de autenticación para diferentes usuarios.
            </p>

            <div className="space-y-6">
              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Herramienta Principal: openEO
                </h3>
                <p className="text-sm text-muted mb-3">
                  Uso intensivo de openEO para ejecutar flujos de trabajo más complejos directamente en la nube, aprovechando la capacidad de procesamiento distribuido.
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="badge bg-teal-100 text-teal-800">⚙️ Automatización</span>
                  <span className="badge bg-indigo-100 text-indigo-800">📈 Escalabilidad</span>
                </div>
              </div>

              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Aprendizaje Automático (ML)
                </h3>
                <p className="text-sm text-muted mb-3">
                  Se integran modelos de ML para tareas como detección de patrones, clasificación del uso del suelo o predicción de eventos extremos.
                </p>
              </div>

              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Sistema de Autenticación y Roles
                </h3>
                <p className="text-sm text-muted mb-3">
                  Implementación de control de acceso seguro usando OAuth2 y JWT, permitiendo diferenciar permisos entre usuarios comunes, técnicos, administradores o instituciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fase 3 */}
        <section id="phase-3" className="w-full">
          <div className="card phase-card phase-3-border shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="icon-circle bg-yellow-400 mr-4">
                <span>🌍</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Fase 3: Consolidación y Expansión Regional
                </h2>
                <p className="text-md text-muted font-semibold">
                  Versión Empresarial: Monetización y Escalado
                </p>
              </div>
            </div>
            <p className="mb-8 text-gray-700">
              La plataforma se expande a nivel regional (Andes, Caribe, Amazonía) con modelos de negocio SaaS, paquetes para constructoras, aseguradoras e instituciones públicas.
            </p>

            <div className="space-y-6">
              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Integración API + Paneles Personalizados
                </h3>
                <p className="text-sm text-muted mb-3">
                  Acceso a análisis personalizados vía API REST y dashboards adaptados al perfil del cliente (inversionistas, municipios, ONG, etc.).
                </p>
              </div>

              <div className="tool-card p-5 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Licenciamiento y Escalabilidad
                </h3>
                <p className="text-sm text-muted mb-3">
                  Sistema de licencias por usuario, por región o por proyecto. Escalabilidad técnica garantizada con contenedores y CI/CD automatizado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-12 md:mt-16 pt-8 border-t-2 border-gray-200">
        <p className="text-lg font-bold text-primary">Una Visión Potente y Viable</p>
        <p className="mt-2 text-muted max-w-3xl mx-auto">
          Esta hoja de ruta demuestra una estrategia clara y escalonada: desde un prototipo funcional hasta una plataforma escalable,
          aprovechando herramientas abiertas como <strong>Sentinel Hub</strong>, <strong>openEO</strong> y <strong>FastAPI</strong>.
          Geo-Síntesis evoluciona para convertirse en un referente regional en monitoreo geoespacial inteligente.
        </p>
      </footer>
    </div>
  );
}
