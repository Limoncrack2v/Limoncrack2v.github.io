import got from 'got';

(async () => {
  try {
    const data = await got('http://datos.imss.gob.mx/api/action/datastore/search.json?resource_id=ae9ed6bc-058c-4556-bb50-a78c808bcc0c&limit=10').json();
    
    console.log('Respuesta:', data);
  } catch (error) {
    console.error('Error:', error);
  }
})();