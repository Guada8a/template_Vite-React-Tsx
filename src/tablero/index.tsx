import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

// Importar dinámicamente todos los archivos de la carpeta pages
const pageFiles = import.meta.glob('./pages/*.tsx');

function RouterApp() {
  const dynamicRoutes = Object.keys(pageFiles).map((filePath) => {
    const Component = React.lazy(pageFiles[filePath] as unknown as () => Promise<{ default: React.ComponentType<any> }>);
    
    // Extraer el nombre del archivo y convertirlo en una ruta
    let routePath = filePath
      .replace('./pages/', '')
      .replace('.tsx', '')
      .toLowerCase();

    // Asignar la ruta '/' para el archivo index.jsx
    if (routePath === 'index') {
      routePath = '/';
    } else {
      routePath = `/${routePath}`;
    }

    return (
      <Route
        key={routePath}
        path={routePath}
        element={
          <Suspense fallback={
            <LinearProgress
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
              }}
            />
          }>
            <Component />
          </Suspense>
        }
      />
    );
  });

  return (
    <Routes>
      {dynamicRoutes}
    </Routes>
  );
}

export default RouterApp;
