# 🌟 nCZr/ui: Registro de Bloques UI Componibles

## 🎯 Objetivo del Proyecto

Crear un **Registro de Bloques UI (Block Registry)** profesional y modular llamado `nCZr/ui`.

El objetivo principal es demostrar dominio en la **arquitectura de composición de componentes** al construir patrones complejos (Organismos y Patrones como "Hero Sections" y "Pricing Tables").

- **Propuesta de Valor:** Proporcionar bloques que extiendan la funcionalidad de los componentes primitivos de ShadCN, enfocándose en la composición avanzada de React.
- **Distribución:** El código fuente se distribuye vía el concepto de _Remote Registry_ del CLI de ShadCN, permitiendo a los usuarios copiarlo directamente en sus proyectos.

---

## 🛠️ Stack Tecnológico

Este proyecto utiliza tecnologías de vanguardia enfocadas en el rendimiento, la flexibilidad y la experiencia del desarrollador (DX).

| Tecnología             | Rol                                                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------- |
| **Framework**          | React + TypeScript                                                                       |
| **Entorno**            | Vite (con soporte para Rolldown experimental)                                            |
| **Estilos**            | Tailwind CSS (junto a PostCSS y Autoprefixer)                                            |
| **Primitivos (Atoms)** | Componentes base derivados de **ShadCN/ui** (utilizando Radix UI como motor _headless_). |
| **Distribución**       | CLI de ShadCN (automatización de Copy/Paste).                                            |
| **Theming**            | CSS Variables (Gestión de Modos Claro/Oscuro y Sets de Estilo Alternativos).             |

---

## 🧪 Stack de Testing

Este proyecto implementa testing moderno, rápido y optimizado para el stack de Vite + React + TypeScript.

| Tecnología                | Rol                                                                                         |
| :------------------------ | :------------------------------------------------------------------------------------------ |
| **Test Runner**           | **Vitest** - Motor de ejecución de tests optimizado para Vite con HMR y soporte nativo ESM. |
| **Component Testing**     | **React Testing Library** - Testing enfocado en comportamiento y accesibilidad.             |
| **User Interactions**     | **@testing-library/user-event** - Simulación realista de interacciones de usuario.          |
| **Custom Matchers**       | **@testing-library/jest-dom** - Matchers semánticos para assertions del DOM.                |
| **DOM Environment**       | **happy-dom** - Simulación ligera y rápida del DOM para Node.js.                            |
| **Coverage** _(Opcional)_ | **@vitest/coverage-v8** - Reportes de cobertura de código.                                  |

### Filosofía de Testing

- **Testing de Composición:** Validar que los Compound Components funcionen correctamente y mantengan su API.
- **Testing de Variantes CVA:** Verificar que las variantes de estilos se apliquen según la configuración.
- **Testing de Accesibilidad:** Asegurar que los bloques cumplan estándares de accesibilidad (roles ARIA, keyboard navigation).
- **Testing de Comportamiento:** Enfoque en cómo interactúa el usuario, no en detalles de implementación.

---

## 🏗️ Arquitectura y Estructura Detallada

La estructura se basa en el principio de **separación de responsabilidades**, distinguiendo los átomos, los bloques de composición y el entorno de previsualización.

### 1. Directorios de Código Fuente (`src/`)

| Directorio             | Propósito                           | Responsabilidad                                                                                                                                        |
| :--------------------- | :---------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/components/ui/`   | **Primitives (Átomos)**             | Contiene los componentes base instalados y gestionados por el CLI de ShadCN (`button.tsx`, `card.tsx`, etc.).                                          |
| `src/components/nczr/` | **Blocks (Bloques de Composición)** | **Tu código único.** Moléculas y Organismos construidos, separados por funcionalidad (ej. `HeroSection/`, `PricingTable/`).                            |
| `src/lib/`             | **Utilities**                       | Funciones auxiliares críticas (ej. `utils.ts` para la gestión de clases `cn`) y futuras herramientas de _theming_.                                     |
| `src/app/`             | **Documentación/Preview**           | Contiene los archivos necesarios para renderizar y navegar por la galería de bloques (el sitio web de `nCZr/ui`).                                      |
| `src/layout/`          | **Layouts**                         | Componentes de estructura del sitio de documentación (Navbar, Sidebar, Grid principal).                                                                |
| `src/previews/`        | **Previsualizaciones**              | Un archivo `.tsx` por cada bloque que incluye el componente real y la funcionalidad para mostrar el código fuente (similar al `Show Code` de Tailark). |

### 2. Estructura de Bloques de Composición (`src/components/nczr/`)

Cada bloque de composición debe ser autocontenido en su propia carpeta para una máxima modularidad:

src/components/nczr/
├── HeroSection/
│ ├── HeroSection.tsx # Componente principal que el usuario importa
│ └── index.ts # Archivo de barril para una importación limpia
├── PricingTable/
│ ├── PricingTable.tsx
│ ├── PricingTableItem.tsx # Un Compound Component hijo
│ └── index.ts └── ...

---

## ✨ Características Distintivas

### 1. Composición con Compound Components y CVA

Los bloques de `nCZr/ui` están construidos utilizando patrones de diseño que priorizan la usabilidad y la tipificación:

- **Compound Components:** Permite a los bloques gestionar el estado interno y la lógica de manera limpia y flexible (ej. `<PricingTable.Header>` y `<PricingTable.Item>`), mejorando la DX para el usuario final.
- **Class-Variance-Authority (CVA):** Se utiliza para gestionar las variaciones de estilos y tamaños de forma tipada y centralizada, ofreciendo una API de diseño muy limpia.

### 2. Gestión de Temas Modulares

El proyecto está diseñado para soportar múltiples sets de bloques de diseño distintos (Ej. Minimalista, Glassmorphism, etc.) que se activan mediante la modificación de **variables CSS**, demostrando escalabilidad en el diseño.
