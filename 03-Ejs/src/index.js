//Importo Librerias a utilizar
const Server = require('./services/server');

//Configuro puerto a utilizar
const puerto = 8080;

//Escucho el puerto
Server.listen(puerto, () => {
    console.log(`Servidor Escuchando en el puerto ${puerto}`);
})
