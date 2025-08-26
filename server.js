const express = require('express');
const bodyParser = require('body-parser') // Llama la dependencia de body-parser para el parseo de datos
const cors = require('cors');
const app = express();
if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

// Permite recibir datos del formulario
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Permite recibir solicitudes en formato JSON

// Habilitar CORS (Cross-Origin Resource Sharing)
// Para desarrollo puedes usar origin: '*' o especificar tu origen 'http://localhost:64176'
app.use(cors());
app.options('*', cors()); // soporta preflight OPTIONS

// RUTAS //
app.use('/api/categories/', require('./api/categories/categories'))
app.use('/api/rols/', require('./api/rols/rols'))
app.use('/api/users/', require('./api/users/users'))
app.use('/api/events/', require('./api/events/events'))

app.set('PORT', process.env.PORT || 4001);
app.listen(app.get('PORT'), ()=>{
    console.log(`Server running on PORT ${app.get('PORT')}`)
})