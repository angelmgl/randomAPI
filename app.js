require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/random/:numeroMinimo/:numeroMaximo', (req, res) => {
    let min = parseInt(req.params.numeroMinimo);
    let max = parseInt(req.params.numeroMaximo);
    let rango = max - min + 1;

    if(isNaN(rango)) {
        res.status(400).json({
            'error': 'bad request',
            'description': 'Los parámetros solo aceptan números enteros'
        });
    } else {
        let result = Math.floor(Math.random() * rango + min);

        res.status(200).json({
            'randomNum': result
        });
    }
});

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log('Servidor corriendo en el puerto: ' + Port);
});