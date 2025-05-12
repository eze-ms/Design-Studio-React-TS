# Art & Desing Studio — Tienda de Muebles con React + useReducer

![Status](https://img.shields.io/badge/status-live-success?style=flat-square)
![React](https://img.shields.io/badge/frontend-React-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178c6?style=flat-square)
![State](https://img.shields.io/badge/state-useReducer-lightgrey?style=flat-square)
![Styling](https://img.shields.io/badge/styling-CSS-blueviolet?style=flat-square)

---

## 📄 Descripción

**Art & Desing Studio** es una tienda de muebles desarrollada con **React + TypeScript**, utilizando una arquitectura modular y `useReducer` para la gestión del estado. Permite a los usuarios explorar productos, añadirlos al carrito, modificar cantidades y vaciarlo. El uso de `useReducer` centraliza la lógica del carrito, mejora el mantenimiento y simplifica el flujo de datos.



---

## 🌐 Demo

🔗 [art-design-studio.app](https://art-design-studio.netlify.app/)


---

## 🖼️ Capturas

#### Lista de productos
![Productos](./public/img/e-comerce.png)

#### Carrito de compras
![Carrito](./public/img/carrito-compra.png)


---

## ✨ Funcionalidades

- Visualización de guitarras con imágenes dinámicas
- Agregar guitarras al carrito
- Incrementar/disminuir cantidades por producto
- Eliminar productos individualmente
- Vaciar carrito completo
- Cálculo automático del total a pagar
- Diseño responsive con estilos CSS propios

---

## 💻 Tecnologías Utilizadas

- **React 18**
- **TypeScript**
- **useReducer** (estado global del carrito)
- **CSS tradicional**
- **Vite**

---

## 📋 Requisitos

- Node.js v18 o superior
- Navegador moderno (Chrome, Firefox, etc.)
- Git

---

## 🧱 Estructura del Proyecto

```bash
GuitarLA-TS/
├── src/
│   ├── componentes/           # Componentes UI (Header, Guitar)
│   ├── data/                  # Catálogo de productos
│   ├── reducers/              # useReducer (cart)
│   ├── types/                 # Tipos personalizados
│   ├── App.tsx / main.tsx     # Entry points
│   └── App.css / index.css    # Estilos globales
├── vite.config.ts
├── tsconfig.json


```

---

## 🛠️ Instalación

```bash
git clone https://github.com/eze-ms/Design-Studio-React-TS

```

### Instalar dependencias
```bash
npm install
```

### Iniciar servidor
```bash
npm run dev
```
---

© 2024. Proyecto desarrollado por Ezequiel Macchi Seoane