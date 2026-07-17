const express = require('express');
const app = express();

// Esta es la parte más importante para que funcione en Render
const port = process.env.PORT || 3000;

// Aquí irían tus otras configuraciones (tus rutas, etc.)
// ... 

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
