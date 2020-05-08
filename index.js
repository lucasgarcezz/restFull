const express = require('express'); //carregando modulo
const consign = require('consign');
const bodyParser = require('body-parser') // soliticar o bodyparser//POST
const expressValidator = require('express-validator');//carregando modulo express validator


/*let routesIndex = require('./routes/index') // importando o routes, requerendo dentro da pasta routes o arquivo indes.js
let routesUsers = require('./routes/users') */

let app = express();

app.use(bodyParser.urlencoded({extended: false }));//POST
app.use(bodyParser.json());//ele precisa fazer o parse dele converte em json//POST
app.use(expressValidator());  //chamando metodo expressValidator

consign().include('routes').include('utils').into(app) //inclui todos os arquivos da pasta routes, e colocar no app



/*app.use(routesIndex); 
app.use('/users',routesUsers);//indicando que essas rotas de userusarios começando com /users
*/

app.listen(3000, '127.0.0.1', ()=>{

    console.log('Server working!')

})