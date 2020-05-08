/*const express = require ('express') //importando express
let routes = express.Router(); //Router com r maiusculo e parenteses pq é um metodo.*/





module.exports = (app)=>{
    app.get('/',(req,res) =>{ //criando servidor  dentro da var server

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');//especificando que res é html
        res.end('<h1>Olá Mundo</h1>'); //mandando uma resposta para o server
    })

} ;//Exportando meu routes, tudo que exportar aqui basta requerer esse arquivo.
