const express = require('express');
const path = require('path');
const app = express();

// 1. Archivos estáticos de public
app.use(express.static(path.join(__dirname, 'public')));

// 2. Vistas HTML
app.use(express.static(path.join(__dirname, 'views'), { extensions: ['html'] }));

// --- RUTAS PRINCIPALES ---
app.get(['/', '/index.html', '/index'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/crianza', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'crianza.html'));
});

app.get('/faqs', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'faqs.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contacto.html'));
});

// NUEVA RUTA EXCLUSIVA DE RECETAS
app.get('/recetas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'recetas.html'));
});

// Redirecciones de seguridad para lo demás
app.get(['/packs', '/combos', '/productos', '/carrito', '/catalogo', '/nutricion'], (req, res) => {
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor de CuyCheff encendido en http://localhost:${PORT}`);
});