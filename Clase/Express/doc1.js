import express from "express";
import path from "node:path";
import mysql from "mysql2";
import { error } from "node:console";

const app = express();

const __dirname = import.meta.dirname;

const connection = mysql.createConnection({
   host: "mysql-31efc894-tec-f26e.e.aivencloud.com",
   port: "20902",
   user: "avnadmin",
   password: "*****",
   database: "defaultdb"
});

app.get("/getUsusarios", (req, res) => {
   const consultaSQL = `
      SELECT *
      FROM KueskiUsuarios;
   `;
   connection.query(consultaSQL, (error, resultados) => {
      if (error) throw error;
      res.json(resultados);
      //console.log(resultados);
      connection.end();
   });

})



connection.connect(error => {
   if (error) throw error;
   console.log("Conectada");
});

app.get("/bienvenida", (req, res) => {
  res.send("Esto no es una página html");
});

app.get("/otraBienvenida", (req, res) => {
  const archivo = path.join(__dirname, "..", "..", "miarchivo.html");

  console.log(archivo);

  res.sendFile(archivo);
});

app.listen(1984, () => {
  console.log("Up and up");
});