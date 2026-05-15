import express from 'express';

const app = express();

app.use(express.json());

// Datos simulados
const opcionesPorTienda = {
  "amazon": [
    { meses: 3, interes: 0, descripcion: "3 meses sin intereses" },
    { meses: 6, interes: 5, descripcion: "6 meses con 5% de interés" }
  ],
  "mercadolibre": [
    { meses: 3, interes: 0, descripcion: "3 meses sin intereses" },
    { meses: 12, interes: 10, descripcion: "12 meses con 10% de interés" }
  ]
};

const solicitudes = [
  {
    id: 1,
    cliente: "Santiago",
    tienda: "amazon",
    monto: 2500,
    estado: "pendiente"
  }
];

// 1. Ruta con parámetros para obtener opciones de pago
app.get('/getOpciones/:tiendaId/:monto', (req, res) => {
  const tiendaId = req.params.tiendaId;
  const monto = Number(req.params.monto);

  if (!opcionesPorTienda[tiendaId]) {
    return res.status(404).json({
      mensaje: "No se encontraron opciones para esta tienda"
    });
  }

  if (monto <= 0) {
    return res.status(400).json({
      mensaje: "El monto debe ser mayor a 0"
    });
  }

  res.status(200).json({
    tienda: tiendaId,
    monto: monto,
    opciones: opcionesPorTienda[tiendaId]
  });
});

// 2. Ruta con parámetro para consultar una solicitud
app.get('/getSolicitud/:solicitudId', (req, res) => {
  const solicitudId = Number(req.params.solicitudId);

  const solicitudEncontrada = solicitudes.find(solicitud => solicitud.id === solicitudId);

  if (!solicitudEncontrada) {
    return res.status(404).json({
      mensaje: "Solicitud no encontrada"
    });
  }

  res.status(200).json(solicitudEncontrada);
});

// 3. Ruta POST para crear una solicitud
app.post('/postSolicitud', (req, res) => {
  const nuevaSolicitud = {
    id: solicitudes.length + 1,
    cliente: req.body.cliente,
    tienda: req.body.tienda,
    monto: req.body.monto,
    estado: "pendiente"
  };

  solicitudes.push(nuevaSolicitud);

  res.status(201).json({
    mensaje: "Solicitud creada correctamente",
    solicitud: nuevaSolicitud
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});