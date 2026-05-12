import express from 'express';
import path from "path";


const app = express();


app.get('/bienvenida', (req, res) => {
   res.send('Esto no es una página html');
});


app.get('/otraBienvenida', (req, res) => {
  res.sendFile(path.join(__dirname, "Limoncrack2v.github.io", "miarchivo.html"));
});


app.listen(1984, () => {
   console.log('Up and up');
});
