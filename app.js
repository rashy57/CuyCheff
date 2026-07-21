const express = require('express');
const path = require('path');
const app = express();

// Puerto dinámico asignado por Render o 3000 local
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de la carpeta public (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares para procesar datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas a las páginas HTML de la carpeta views
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/crianza', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'crianza.html'));
});

app.get('/recetas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'recetas.html'));
});

app.get('/faqs', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'faqs.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contacto.html'));
});

// Redirección si entra a una ruta que no existe
app.use((req, res) => {
    res.redirect('/');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado correctamente en el puerto ${PORT}`);
});
