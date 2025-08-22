const express = require('express');
const bodyParser = require('body-parser') // Llama la dependencia de body-parser para el parseo de datos
const app = express();

// Permite recibir datos del formulario
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Permite recibir solicitudes en formato JSON

// RUTAS //
app.use('/api/categories/', require('./api/categories/categories'))
app.use('/api/rols/', require('./api/rols/rols'))
app.use('/api/users/', require('./api/users/users'))
app.use('/api/events/', require('./api/events/events'))

app.set('PORT', 4001);
app.listen(app.get('PORT'), ()=>{
    console.log(`Server running on PORT ${app.get('PORT')}`)
})