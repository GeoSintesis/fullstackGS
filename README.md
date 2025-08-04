# Geo‑Síntesis

**Convirtiendo los datos del cielo en seguridad en la tierra.**

Geo‑Síntesis es una plataforma de monitoreo geoespacial que aprovecha datos satelitales y algoritmos avanzados para generar alertas tempranas y mapas dinámicos de riesgo. Combina múltiples fuentes de observación de la Tierra —incluyendo imágenes ópticas y de radar, modelos digitales de elevación y capas geográficas— con el objetivo de ofrecer información precisa, útil y accionable ante desastres naturales.

---

## 🌍 Problema que busca resolver

En el contexto del [Hackathon Copernicus](https://hackathons.copernicus.eu), Geo‑Síntesis responde a los siguientes desafíos:

- **Protección de ciudades**: anticipa amenazas como deslizamientos e inundaciones que afectan zonas urbanas y rurales.
- **Mitigación y adaptación al cambio climático**: analiza datos históricos y patrones ambientales para apoyar la toma de decisiones sostenibles y resilientes.

---

## 🚀 ¿Qué hace Geo‑Síntesis?

- Detecta cambios geográficos, amenazas naturales y patrones de riesgo usando datos satelitales.
- Genera mapas de susceptibilidad y dashboards de monitoreo de riesgos.
- Ofrece servicios escalables: desde análisis puntuales hasta monitoreo continuo con alertas.
- Cataloga amenazas y analiza históricos para apoyar la planificación de remediación.
- Sirve a una amplia gama de usuarios: gobiernos, urbanistas, ONGs, aseguradoras, constructores y agricultores.

---

## 🧠 Tecnologías clave

| Componente     | Tecnología                                                                 |
|----------------|----------------------------------------------------------------------------|
| Frontend       | Next.js 14 (App Router), React, TypeScript, TailwindCSS, Heroicons         |
| Backend        | FastAPI, Celery, Python 3.11                                               |
| Bases de datos | MongoDB (GeoJSON), PostgreSQL, PostGIS                                     |
| Procesamiento  | openEO, Algoritmos de Machine Learning, Rasterio, GDAL                     |
| DevOps         | Docker, Docker Compose, GitHub Actions, pre-commit, scripts Bash           |
| Autenticación  | OAuth2 con JWT, TOTP (Two-Factor), NextAuth.js (en evaluación)             |
| Mapas          | React-Leaflet, Leaflet, MapLibre, OpenStreetMap                            |

---

## 📁 Estructura del Proyecto

```plaintext
geo-sintesis/
├── backend/           # API en FastAPI, worker Celery
├── frontend/          # Aplicación Next.js (SPA)
├── conf/              # Configuración de servicios (ej. RabbitMQ)
├── scripts/           # Automatización y despliegue
├── .github/           # CI/CD con GitHub Actions
├── docker-compose.yml # Contenedor de servicios en desarrollo
├── .env               # Variables de entorno
└── README.md          # Este documento
````

---

## ⚙️ Estado Actual del Proyecto

* ✅ **Conectividad API:** Integración inicial con Sentinel Hub y openEO desde backend
* 🔄 **Frontend:** En desarrollo (SPA con visualización y navegación básica)
* 🧩 **Base de datos:** Inicio de estructuración (MongoDB y PostGIS en evaluación)
* 🧪 **Infraestructura:** Docker Compose funcional para entorno local
* 📦 **Despliegue:** Planeado en VPS (etapa futura)

---

## 🧭 Roadmap (Corto Plazo)

1. **MVP funcional** con ejemplos de análisis y visualizaciones
2. **Definición de capas y modelos** de datos geoespaciales
3. **Integración de procesamiento con openEO** en la nube
4. **Diseño del sistema de autenticación y roles**
5. **Preparación de pitch** y despliegue en entorno staging

---

## 🧪 Instalación para desarrollo

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/GeoSintesis/fullstackGS.git
   cd fullstackGS
   ```

2. Crear archivo `.env` con tus variables locales (puedes usar `.env.example` como referencia).

3. Iniciar entorno local:

   ```bash
   docker-compose up --build
   ```

---

## 🤝 Contribuciones

Este repositorio aún se encuentra en etapa temprana. Las contribuciones serán bienvenidas próximamente bajo una guía estructurada de desarrollo colaborativo.

---

## 📫 Contacto

Para consultas, propuestas o colaboración:
📧 [franklingo13@gmail.com](mailto:franklingo13@gmail.com)

---

© 2025 Geo‑Síntesis — Plataforma de Inteligencia Geoespacial
