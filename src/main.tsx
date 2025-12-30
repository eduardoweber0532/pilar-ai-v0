
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Pilar AI: Iniciando montagem do app...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  const msg = "Erro Crítico: Elemento #root não encontrado no DOM.";
  console.error(msg);
  document.body.innerHTML = `<div style="color: white; background: red; padding: 20px;">${msg}</div>`;
  throw new Error(msg);
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Pilar AI: App montado com sucesso.");
} catch (error) {
  console.error("Pilar AI: Falha na renderização inicial:", error);
  rootElement.innerHTML = `<div style="color: white; padding: 40px; text-align: center;">
    <h1>Ops! Algo deu errado.</h1>
    <p>Houve um erro ao carregar a aplicação. Por favor, recarregue a página.</p>
    <pre style="text-align: left; background: #222; padding: 20px; border-radius: 8px; font-size: 12px; margin-top: 20px; overflow: auto;">${error instanceof Error ? error.message : String(error)}</pre>
  </div>`;
}
