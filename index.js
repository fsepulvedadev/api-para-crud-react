const bodyParser = require("body-parser");
var express = require("express");

rutas = require("./rutas/rutas.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("funcionando...");
});

//Rutas

app.get("/empleados", rutas.obtenerEmpleados);
app.get("/empleados/:id", rutas.obtenerEmpleadosPorId);
app.post("/empleados", rutas.agregar);
app.put("/empleados/:id", rutas.editar);
app.delete("/empleados/:id", rutas.eliminar);

app.listen(3000);
console.log("Escuchando en el puerto 3000");
