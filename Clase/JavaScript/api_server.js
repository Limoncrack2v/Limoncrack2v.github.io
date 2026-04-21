import http from 'http';
import url from 'url';

const servidor = http.createServer((req, res) => {
    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;
    console.log(queryParams.x);
    console.log(queryParams.y);

    console.log("Alguien me mandó una solicitud");

    if (queryParams.x == 1){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hola como estas?\n');
    }else if(queryParams.x == 2){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bien y tu?\n');    
    }else{
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Ayudaaaaaa\n');    
    }
    
});

const puerto = 1010;

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
