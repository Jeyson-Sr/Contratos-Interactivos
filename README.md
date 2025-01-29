# Generador de Contrato Dinamicos

Este proyecto es una aplicación web que permite generar contratos de arrendamiento de manera dinámica a través de un formulario interactivo.

## 🚀 Características

- Formulario paso a paso con preguntas dinámicas
- Generación de contrato en tiempo real
- Barra de progreso interactiva
- Validación de campos
- Interfaz responsiva y amigable
- Soporte para diferentes tipos de inputs (texto, fecha, número, radio)

## 💻 Tecnologías Utilizadas

- React.js
- TailwindCSS
- PropTypes
- JSON para almacenamiento de preguntas

## 📝 Uso

1. La aplicación muestra un formulario con preguntas secuenciales sobre el contrato
2. Completa cada campo según se solicite
3. Usa los botones "Paso siguiente" y "Paso anterior" para navegar
4. El contrato se genera automáticamente en el panel derecho
5. Los campos incluyen:
   - Datos del propietario y arrendatario
   - Información del inmueble
   - Condiciones del contrato
   - Servicios incluidos
   - Restricciones y condiciones adicionales

## 📋 Estructura del Proyecto

- `/src/Components/`
  - `FormQuestion.jsx`: Maneja el formulario interactivo
  - `DocumentoDinamico.jsx`: Genera el contrato en tiempo real
- `datos.json`: Contiene todas las preguntas y opciones del formulario
