# CardioGuard

CardioGuard es un sistema integral de monitoreo cardíaco que combina hardware, software y análisis de datos para proporcionar seguimiento en tiempo real de la salud cardíaca y llegar a predecir con Inteligencia Artificial posibles problemas cardíacos.

## Estructura del Proyecto

### 1. Pulse Data Capture (/pulse_data_capture)
Sistema de captura de datos del pulso cardíaco usando C++ y Python.

#### Componentes:
- read_data_sensor/: Módulo para lectura de datos del sensor
- real_time_graphic.py: Visualización en tiempo real de los datos del pulso
- data_logger_T.py: Sistema de registro de datos con timestamp
- test_port.py: Utilidad para pruebas de conexión del puerto
- Prototipo - CardioGuard.jpg: Imagen del prototipo físico

### 2. API Express (/api-express)
Backend desarrollado con Express.js para gestionar los datos y la comunicación.

#### Estructura:
- routes/: Definición de endpoints de la API
- models/: Modelos de datos
- controllers/: Lógica de control
- config/: Configuraciones del servidor
- server.js: Punto de entrada del servidor
- grafica.py: Script para generación de gráficos

### 3. Modelo de IA (/IA_model)
Sistema de análisis predictivo basado en datos del pulso.

#### Componentes:
- [Code]HackatonTroyano2025-CookieCoders.ipynb: Notebook de Jupyter con el modelo de IA
- pulso.csv: Dataset de entrenamiento
- IA_Model.text: Documentación del modelo

### 4. Frontend Prototipo (/FrontEnd Proto)
Prototipos de interfaz de usuario.

#### Componentes:
- Visual Prototipe - Teléfono/: Diseños para la interfaz móvil
- Visual Prototipe - Web/: Diseños para la interfaz web
- info.txt: Información adicional del prototipo

### 5. Aplicación Móvil (/CG_AppMovil)
Aplicación móvil desarrollada con Expo.

#### Estructura:
- screens/: Pantallas de la aplicación
- assets/: Recursos gráficos y multimedia
- App.js: Componente principal
- index.js: Punto de entrada
- app.json: Configuración de Expo

## Requisitos del Sistema

### Backend (API Express)
- Node.js
- Express.js
- MongoDB (para almacenamiento de datos)

### Frontend
- React.js
- Expo CLI
- Node.js

### Captura de Datos
- Python 3.x
- Bibliotecas: pandas, numpy, matplotlib

## Instalación

1. Clonar el repositorio:
bash
git clone https://github.com/tu-usuario/cardioGuard.git


2. Instalar dependencias del backend:
bash
cd api-express
npm install


3. Instalar dependencias de la aplicación móvil:
bash
cd CG_AppMovil
npm install


4. Instalar dependencias de Python:
bash
cd pulse_data_capture
pip install -r requirements.txt


## Uso

1. Iniciar el servidor backend:
bash
cd api-express
npm start


2. Iniciar la aplicación móvil:
bash
cd CG_AppMovil
expo start


3. Ejecutar la captura de datos:
bash
cd pulse_data_capture
python real_time_graphic.py


## Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crear una rama para tu feature (git checkout -b feature/AmazingFeature)
3. Commit tus cambios (git commit -m 'Add some AmazingFeature')
4. Push a la rama (git push origin feature/AmazingFeature)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT

## Contacto

Tu Nombre - Salvador Camacho Pacheco - saldiec7@gmail.com

Link del Proyecto: [https://github.com/tu-usuario/cardioGuard](https://github.com/tu-usuario/cardioGuard)
