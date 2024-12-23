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

app.get('/trapecio/:a/:b/:h', (req, resp) => {
    let baseMayor = parseFloat(req.params.a); 
    let baseMenor = parseFloat(req.params.b);
    let altura = parseFloat(req.params.h);    
        let area = ((baseMayor + baseMenor) * altura) 
        resp.send('El área del trapecio es: ' + area.toFixed(2)); 
});

app.get('/trinomio/:a/:b/:c', (req, res) => {

    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let c = parseInt(req.params.c);

    let discriminante = Math.pow(b, 2) - 4 * a * c;

    if (discriminante === 0) {
        let p = b / (2 * a); // Valor de p
        let factor = `(x ${p < 0 ? '+ ' : '- '}${Math.abs(p)})²`;
        res.send('Respuesta: El trinomio es un cuadrado perfecto y su factorización es ' + factor);
    } else {
        res.send(`El trinomio ${a}x² ${b < 0 ? '- ' : '+ '}${Math.abs(b)}x ${c < 0 ? '- ' : '+ '}${Math.abs(c)} NO es un cuadrado perfecto.`);
    }
});




app.listen(3001,()=>{
    console.log ('Correcto');
});