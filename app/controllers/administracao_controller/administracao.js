/* INICIO USUARIOS */
module.exports.admin = (app, req, res)=>{

    
    var conexao = app.config.db();

    var mostrarUsers = app.app.models.dbDAO;

    mostrarUsers.mostrarUsuario(conexao,(error, result)=>{
        res.render("administracao/cadastroUsuario_view",{usuario: result, user:{}});

    })

   
}
module.exports.usuario =(app,req,res)=>{
    var conexao = app.config.db();
    var usuarioDao = app.app.models.dbDAO;
    var usuario = req.query;

    
    usuarioDao.pegarUsuario(usuario,conexao, (err, result)=>{

        res.render("administracao/_detalhes_usuario",{user:result})

    })



}

module.exports.update = (app,req,res)=>{

    var conexao = app.config.db();
    var usuarioDao = app.app.models.dbDAO;

    var parametros = req.body;


   

   req.assert("usuario","O campo Usuário não pode estar vazio").notEmpty();

   req.assert("senha","O campo Senha não pode estar vazia").notEmpty();
   req.assert("senha2","Informe a nova Senha").notEmpty();
   req.assert("senha3","Confirme a nova Senha").notEmpty();
   
   var erros = req.validationErrors();



   if(req.body.senha2 == req.body.senha3 && (req.body.senha2 != "" || req.body.senha3 != "")){

        if(erros){
            res.render("administracao/_detalhes_usuario",{erros: erros});
            
            return;
        }
        usuarioDao.editarUsuario(parametros, conexao, res); 
   }else{

        var senhaConfirmacao = "A senha de confirmação ou a nova senha são divergentes";
      
        res.render("administracao/_detalhes_usuario",{mensagem: senhaConfirmacao , erros: {}, user: {}})

   }   

}


module.exports.remover = (app, req, res)=>{

    var item = req.query;

    var conexao = app.config.db();
    var usuarioDao = app.app.models.dbDAO;

        usuarioDao.excluirUsuario(item, conexao, (err, result)=>{

            res.redirect("/usuarios");
        })


}



module.exports.salvar_usuario = (app, req, res)=>{

    var usuario = req.body;


    var conexao = app.config.db();

    var salvar = app.app.models.dbDAO;

    salvar.salvarUsuario(conexao, usuario, (error, result)=>{

        res.redirect("/usuarios");
    })


}
/*FIM USUARIOS*/


    
