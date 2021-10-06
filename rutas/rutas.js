var mongoose = require("mongoose");

//conectar a base de datos

mongoose.connect("mongodb://localhost/vinos");

// Esquema de la DB

var EmpleadosSchema = {
  id: Number,
  nombre: String,
  email: String,
};

var Empleados = mongoose.model("empleados", EmpleadosSchema);

exports.obtenerEmpleados = function (req, res) {
  Empleados.find(function (error, empleados) {
    res.send(empleados);
  });
};

exports.obtenerEmpleadosPorId = function (req, res) {
  Empleados.findOne({ _id: req.params.id }, function (error, empleado) {
    res.send(empleado);
  });
};

exports.agregar = function (req, res) {
  var data = {
    id: req.body.id,
    nombre: req.body.nombre,
    email: req.body.email,
  };

  var empleado = new Empleados(data);

  empleado.save(function (error, resultado) {
    if (error) {
      res.send("Hubo un error.");
    } else {
      res.send(resultado[0]);
    }
  });
};

exports.editar = function (req, res) {
  var data = {
    id: req.body.id,
    nombre: req.body.nombre,
    email: req.body.email,
  };

  Empleados.updateOne({ _id: req.params.id }, data, function () {
    res.send(data);
  });
};

exports.eliminar = function (req, res) {
  Empleados.deleteOne({ _id: req.params.id }, function (error) {
    if (error) {
      console.log(error);
    } else {
      res.send("true");
    }
  });
};
