module.exports = (application)=>{

    application.get("/usuarios",(req,res)=>{

        application.app.controllers.administracao_controller.administracao.admin(application,req,res);
    })

    // detalhes
    application.get("/usuario",(req,res)=>{

        application.app.controllers.administracao_controller.administracao.usuario(application,req,res);
    
    })

    application.get("/remover",(req, res)=>{
        application.app.controllers.administracao_controller.administracao.remover(application,req,res);

    })
    application.post("/update",(req,res)=>{
        application.app.controllers.administracao_controller.administracao.update(application,req,res);

    
    })
    application.get("/update",(req,res)=>{
        application.app.controllers.administracao_controller.administracao.update(application,req,res);

    
    })
   

    
    application.get("/parametros", (req, res)=>{

        res.render("administracao/parametros_view");

    })

    

    application.post("/salvar",(req,res)=>{

        application.app.controllers.administracao_controller.administracao.salvar_usuario(application,req,res);

    })

}