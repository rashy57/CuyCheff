const express = require("express");
const path = require("path");

const app = express();

// Permite acceder a los archivos de la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Cuando el usuario entre a la página principal
app.get("/", (req, res) => {
    res.send("HOLA CUYCHEFF");
});

// Puerto del servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});