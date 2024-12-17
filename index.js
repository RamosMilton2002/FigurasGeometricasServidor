const express = require ('express');
const app = express();
app.use(express.json());



app.get('/area/:lado', (req, resp) => {
    let lado = parseInt(req.params.lado);
        let area = lado * lado;
        resp.send('El área del cuadrado es: ' + area);
});

app.listen(3001,()=>{
    console.log ('Correcto');
});