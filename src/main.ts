import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { App } from './app.ts';
const modules = import.meta.glob('./bases/*/*.ts');
import './bases/03-objects/objects.ts';

// Esto importa todos los archivos, pero como módulos asíncronos
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(`Módulo cargado: ${path}`, mod);
  });
}


const root = document.getElementById('app');
if (root) {
   // 1️⃣ crear contenedores internos
  root.innerHTML = `
    <div id="app-content"></div>
    <div id="vite-template"></div>
  `;

  // 2️⃣ renderizar tu App dentro de su contenedor
  const appContent = document.getElementById('app-content')!;
  App(appContent);

  // 3️⃣ renderizar el template de Vite en su contenedor
  const viteContainer = document.getElementById('vite-template')!;
  viteContainer.innerHTML = `
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  `;

  // 4️⃣ activar el contador
  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
} else {
  console.error("No se encontró el div #app");
}
