import http from 'http';

const servidor = http.createServer(async (req, res) => {
    console.log("Alguien me mandó una solicitud");

    try{
        const answer = await fetch('https://www.abibliadigital.com.br/api/books/mt', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJGcmkgQXByIDE3IDIwMjYgMTY6MTA6MjggR01UKzAwMDAuaHVnbzkyNjg5QGdtYWlsLmNvbSIsImlhdCI6MTc3NjQ0MjIyOH0.wzC-PH7rBWrTn0sCXjxYGWtsh-DasF5rhF7EIKp7qhg'

            }

            //Se realizo un POST para crear el ususario, sin embargo se elimino para hacer el GET, se muestra la sintaxis utilizada a continuacion.
            /*
            method: 'POST'
            headers: {    
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringfy({
                
                "name": "Hugo Salazar",
                "email": "correo",
                "password": "48764876", // minimum size 6 digits
                "notifications": false // receive update emails from www.abibliadigital.com.br
    
            })
        */
        });
        const datos = await answer.json();

        console.log(datos)

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(datos));

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
