
'use client'

import React, { Suspense, lazy, Component, ErrorInfo, ReactNode } from 'react'

/**
 * Error Boundary para capturar falhas de renderização (como erros de WebGL)
 */
class SplineErrorBoundary extends Component<{ children: ReactNode, fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode, fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Spline Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * Placeholder de erro discreto.
 */
const ErrorPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center rounded-lg p-6 text-center">
    <div className="max-w-xs opacity-20">
      <svg className="w-8 h-8 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">Visualização Indisponível</p>
      <p className="text-gray-600 text-[8px] mt-1 italic">Módulo 3D não carregado</p>
    </div>
  </div>
);

/**
 * Loader resiliente para o Spline. 
 * Tenta buscar o componente padrão e trata possíveis falhas de módulo.
 */
const SplineComponent = lazy<React.ComponentType<{ scene: string; className?: string }>>(async () => {
  try {
    const module = await import('@splinetool/react-spline');
    // esm.sh costuma exportar o componente como default
    const Component = module.default || (module as any).Spline;
    
    if (!Component) {
      throw new Error("Spline component not found in module");
    }
    
    return { default: Component };
  } catch (err) {
    console.error("Erro crítico ao importar @splinetool/react-spline:", err);
    return { default: ErrorPlaceholder };
  }
});

// Memoize o componente para evitar re-renders que podem forçar novas criações de contexto WebGL
const MemoizedSpline = React.memo(SplineComponent);

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <SplineErrorBoundary fallback={<ErrorPlaceholder />}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
             <div className="w-8 h-8 border-2 border-[#6A4CFF]/20 border-t-[#6A4CFF] rounded-full animate-spin"></div>
          </div>
        }
      >
        <MemoizedSpline
          scene={scene}
          className={className}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}
