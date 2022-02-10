// -------------------------------------------
// Parametros de express
const express = require('express');
const { join } = require('path');
const app = express();
const port = 3000;
const path = require ('path');

console.log(__dirname);
console.log(__filename);

// -------------------------------------------
// Construcción del Middleware direccionado a public
const rutaDePublic = path.join(__dirname, '../public');
console.log(rutaDePublic);

app.use(express.static(rutaDePublic));

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
});

// -------------------------------------------
// Parametros de rutas
app.get ('/', (req,res)=>{
    res.send('This is root /')
})

// -------------------------------------------
// Express empieza a eschucar peticiones en puerto 3000
app.listen(port, () => {
    console.log("Este servidor esta vivito y coleando!! 🚀");
});
