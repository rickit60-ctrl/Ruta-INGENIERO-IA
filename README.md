# Ruta Applied AI Engineer - 8 meses

Aplicación web estática, responsive e instalable para seguir una ruta personal de formación en Applied AI Engineering.

## Producción

La rama `main` se publica automáticamente con GitHub Pages mediante GitHub Actions:

**https://rickit60-ctrl.github.io/Ruta-INGENIERO-IA/**

## Funcionalidades

- Ruta de aprendizaje de 8 meses con 39 competencias.
- Seguimiento del progreso por tarea y por mes.
- Plan de certificaciones profesionales.
- Bitácora de sesiones con cálculo de racha.
- Tema claro y oscuro.
- Aplicación web progresiva (PWA) con soporte sin conexión.

## Estructura

```text
.
|-- .github/workflows/pages.yml  # Despliegue automático
|-- assets/
|   |-- css/styles.css           # Estilos
|   |-- icons/icon.svg           # Icono de la PWA
|   `-- js/app.js                # Datos y lógica de la aplicación
|-- index.html                   # Página principal
|-- manifest.webmanifest         # Configuración instalable
|-- sw.js                        # Caché y soporte sin conexión
`-- hosting.json                 # Configuración de hosting estático
```

## Desarrollo local

No requiere dependencias ni compilación. Sirve la raíz del repositorio con cualquier servidor HTTP estático. Por ejemplo:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

## Despliegue

Cada `push` a `main` ejecuta el flujo `Deploy to GitHub Pages`. En la configuración del repositorio, Pages debe usar **GitHub Actions** como fuente.

## Datos y privacidad

El progreso y la bitácora se guardan únicamente en `localStorage` del navegador. No se envían a ningún servidor y no se sincronizan entre dispositivos.
