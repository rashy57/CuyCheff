const express = require('express');
const path = require('path');
const app = express();

// Esto sirve los archivos de tu carpeta 'public' (imágenes, CSS, JS)
app.use(express.static('public'));

// Esto le dice a Render: "Cuando alguien entre a la página principal, muestra el index.html"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Configuración del puerto para que funcione en Render
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
