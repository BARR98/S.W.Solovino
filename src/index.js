const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//CONECTAR CON LA BDD
const { mongoose } = require('./database/database')

//CONFIGURACIONES DEL SERVIDOR
app.set('port', process.env.PORT || 3000)

//MIDELWARE 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//RUTAS DEL SERVIDOR
app.use('/api/huellitas/posts', require('./routes/RoutesPosts/routes.posts'));


//INICIAR EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto' + app.get('port'))
});