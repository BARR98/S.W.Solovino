const mongoose = require('mongoose');


//CONFIGURAR PUERTOS DE LA BASE DE DATOS
url = 'mongodb://localhost/server'
dbparams = {
    useNewUrlParser: true,
    family: 4,
    useUnifiedTopology: true
};

mongoose.connect(url, dbparams)
    .then(db => console.log('BD CONECTADA'))
    .catch(err => console.log(err));

module.exports = mongoose;