# Frontend de la Tienda - Prueba Técnica

Este es el frontend de la aplicación de tienda creada como parte de una prueba técnica. La aplicación está construida con Next.js, TailwindCSS, Redux y TypeScript. 
- Esta aplicación frontend está desplegada en https://frontend-store-prueba-tecnica.vercel.app.
- El backend que maneja los productos y el carrito de compras es consumido a través de la API desplegada en https://backend-store-prueba-tecnica.vercel.app.



## Funcionalidades

- Visualización de productos disponibles.
- Gestión del carrito de compras (agregar y eliminar productos).
- Integración con la API backend para la gestión de productos y el carrito.

## Cómo Ejecutar la Aplicación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/JohanLeon0914/frontend-store-prueba-tecnica.git
2. Entra en la carpeta del proyecto:
   ```bash
   cd frontend-store-prueba-tecnica
3. Instala las dependencias:
   ```bash
   npm install
4. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega URL de la API, https://backend-store-prueba-tecnica.vercel.app o 
    http://localhost:3000 si estas corriendo el backend en local:
    ```bash
    NEXT_PUBLIC_API_URL = "https://backend-store-prueba-tecnica.vercel.app"
5. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
Esto iniciará el servidor en http://localhost:3000 o en http://localhost:3001 si el puerto ya esta ocupado por el servidor backend
