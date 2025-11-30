# React + TypeScript + Tailwind CSS + PrimeReact

A modern React application built with TypeScript, styled with Tailwind CSS, and using PrimeReact components.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PrimeReact** - Rich UI component library
- **PrimeIcons** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles (includes Tailwind directives)
└── assets/          # Static assets
```

## Features

- ✅ React 18 with TypeScript
- ✅ Tailwind CSS for utility-first styling
- ✅ PrimeReact components integrated
- ✅ PrimeIcons for iconography
- ✅ Hot Module Replacement (HMR)
- ✅ ESLint configured

## Using PrimeReact Components

PrimeReact provides 90+ rich UI components. Example usage:

```tsx
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

function MyComponent() {
  return (
    <Card title="My Card">
      <Button label="Click Me" icon="pi pi-check" />
    </Card>
  )
}
```

## Using Tailwind CSS

Tailwind utility classes work alongside PrimeReact:

```tsx
<div className="flex items-center gap-4 p-6 bg-blue-100 rounded-lg">
  <Button label="Submit" />
</div>
```

## Documentation

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeReact](https://primereact.org/)
- [PrimeIcons](https://primereact.org/icons/)
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
