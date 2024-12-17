const express = require ('express');
const app = express();
app.use(express.json());



app.get('/cuadrado/:lado', (req, resp) => {
    let lado = parseInt(req.params.lado);
        let area = lado * lado;
        resp.send('El área del cuadrado es: ' + area);
});

app.get('/triangulo/:base/:altura', (req, resp) => {
    let base = parseFloat(req.params.base);
    let altura = parseFloat(req.params.altura); 


        let area = (base * altura) / 2; 
        resp.send('El área del triángulo es: ' + area);
});

app.listen(3001,()=>{
    console.log ('Correcto');
});