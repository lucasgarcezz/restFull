module.exports = {
    user:(app,req,res)=>{
        req.assert('name', 'O nome é obrigatório.').notEmpty(); //validando o nome, vendo se esta vazio ou n
        req.assert('email', 'O email esta inválido.').notEmpty().isEmail();
    
        let erros = req.validationErrors();
        if (erros){
            app.utils.error.send(erros,req,res); 
            return false
    
    
        }else{

            return true;
        }


    }

};