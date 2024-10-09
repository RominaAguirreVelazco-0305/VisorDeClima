# 🌦️ Visor del Clima 🌤️

¡Bienvenido al **Visor del Clima**! Este proyecto te permite obtener el clima actual de cualquier ciudad del mundo usando la API de [OpenWeatherMap](https://openweathermap.org/). 🌍

## 🌐La encuentras en Web: https://climita-c726d46d5c2e.herokuapp.com/

## 🖼️ Capturas de Pantalla
![image](https://github.com/user-attachments/assets/5e8b8a0e-9807-4950-a027-462e2d380c55)


## 📋 Descripción

Este proyecto es una aplicación simple pero interactiva que muestra el clima de la ciudad ingresada por el usuario. Utiliza **Node.js**, **Express** y **EJS** como motor de plantillas para mostrar los datos de manera amigable. Además, está estilizada con **CSS** y animaciones para hacerla más atractiva y fácil de usar.

## 🚀 Características

- 🔎 **Búsqueda de Clima**: Introduce el nombre de una ciudad para ver el clima actual.
- 🌡️ **Temperatura y Descripción**: Muestra la temperatura en grados Celsius y una breve descripción del clima (por ejemplo: nublado, soleado, etc.).
- 🌈 **Íconos de Clima**: Los íconos se actualizan según el estado del clima de la ciudad ingresada.
- 📱 **Interfaz Interactiva**: Diseño simple, limpio y responsive con efectos animados para mejorar la experiencia del usuario.

## 🛠️ Instalación
- 🛠️Instala las dependencias: npm install
- Clona este repositorio: 


## Obtén tu API Key de OpenWeatherMap 🌐
- Regístrate en OpenWeatherMap y genera una API Key. Reemplaza la API Key en el archivo app.js en la variable apiKey:

- const apiKey = 'TU_API_KEY'; // Reemplaza con tu API Key

🌟## Inicia la aplicación
- Una vez configurada la API Key, inicia el servidor con el siguiente comando:npm start

### 📦 Estructura del Proyecto
- 📂 visor-del-clima
- ├── 📂 public          # Archivos estáticos (CSS, imágenes, etc.)
- ├── 📂 views           # Plantillas EJS
- │   └── index.ejs      # Página principal de la aplicación
- ├── app.js             # Archivo principal de la aplicación
- ├── package.json       # Dependencias y scripts del proyecto
- └── README.md          # Este archivo

## ⚙️ Tecnologías Utilizadas
- Node.js 🟢: Plataforma del servidor.
- Express 🚀: Framework web rápido y minimalista para Node.js.
- EJS 📄: Motor de plantillas para renderizar HTML dinámico.
- Axios 🌐: Librería para hacer peticiones HTTP (usada para obtener los datos del clima).
- CSS 🎨: Para los estilos y animaciones de la interfaz.


## 👩‍💻 Cómo Funciona
- El usuario ingresa el nombre de una ciudad en el campo de texto.
- La aplicación envía una solicitud a la API de OpenWeatherMap con el nombre de la ciudad ingresada.
- Si la ciudad es válida, se muestra el clima actual (temperatura, descripción y un ícono del estado del clima).
- Si la ciudad no se encuentra o hay un error en la solicitud, se muestra un mensaje de error al usuario.

## 📚 Requisitos Previos
- Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- Node.js (versión 14 o superior) 🟢
- npm (Administrador de paquetes de Node.js) 📦


## 🌐 Cómo Visualizar mi repositorio
Puedes visualizar mi PÁGINA en línea visitando el siguiente enlace:

## Desarrollado con ❤️ por Romina Aguirre.
