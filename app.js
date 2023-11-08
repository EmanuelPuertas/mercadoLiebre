const express = require("express");
const app = express();
const PORT = 3001;

app.use("/static",express.static(__dirname + "/public")); //manejador de archivos publicos, "use" para los staticos

app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/views/home.html")
})

app.listen(PORT,() => {
    console.log("Servidor iniciado en el port "+PORT);
} );