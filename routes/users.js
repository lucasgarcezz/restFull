/*const express = require ('express') //importando express
let routes = express.Router();*/

const neDB = require('nedb');
let db = new neDB({
    filename:'users.db',
    autoload:true //para que caso nao tenha ele ja cria um user auto



});


module.exports = (app)=>{
    let route = app.route('/users')

    route.get((req,res)=>{
        
        db.find({}).sort({name:1}).exec((err,users)=>{
         if(err){
            app.utils.error.send(err,req,res); //chamando o nosso arquivo exclusivo para erros 
         } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');//especificando que res é html
            res.json({ //respondendo com um json e mandando json p tela
                    users
                }); //mandando uma resposta para o server

         }
    }); //ordenando usuario pela coluna nome 

     

});

route.post((req,res)=>{

   if (!app.utils.validator.user(app,req,res)) return false;

    db.insert(req.body,(err,user)=>{
        if(err){//caso esse parametro de erro
            app.utils.error.send(err,req,res); 

        }else { //se deu certo...
            res.status(200).json(user);

        }
    })//salvar resgistro dentro do banco
});

    let routeID = app.route('/users/:id');

    routeID.get((req,res) =>{

        db.findOne({_id:req.params.id}).exec((err,user) =>{
            db.insert(req.body,(err,user)=>{
                if(err){//caso esse parametro de erro
                    app.utils.error.send(err,req,res); 
        
                }else { //se deu certo...
                    res.status(200).json(user);
        
                }
            })//salvar resgistro dentro do banco

        });
    });

    routeID.put((req,res) =>{
       
        if (!app.utils.validator.user(app,req,res)) return false;
        
        db.update({_id:req.params.id}, req.body, err =>{

            
                if(err){//caso esse parametro de erro
                    app.utils.error.send(err,req,res); 
        
                }else { //se deu certo...
                    res.status(200).json(Object.assign(req.params, req.body));
                    //juntando e mesclando recParams e recB ody
        
                }
            //salvar resgistro dentro do banco

        });
    });

    routeID.delete((req,res)=>{
        db.remove({_id:req.params.id},{}, err =>{

            if(err){//caso esse parametro de erro
                app.utils.error.send(err,req,res); 
    
            }else { //se deu certo...
                res.status(200).json(req.params);
                //juntando e mesclando recParams e recB ody
    
            }

        });

    })


}