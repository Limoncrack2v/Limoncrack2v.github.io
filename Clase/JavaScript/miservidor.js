import http from 'http';

const servidor = http.createServer(async (req, res) => {
    console.log("Alguien me mandó una solicitud");

    try{
        const answer = await fetch('https://www.theaudiodb.com/api/v1/json/123/search.php?s=Bad+Bunny')
        const datos = await answer.json();

        console.log(datos)

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(datos.artists[0].strBiography + '\n');

    } catch{
        
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al obtener datos');
        console.error(error);
    }
});

const puerto = 1010;

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
