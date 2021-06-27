module.exports = (application)=>{

    application.get("/arquivo",(req,res)=>{

        application.app.controllers.cadastro_controller.cadastro.arquivo(application,req,res);

    })

    application.post("/arquivo_salvar",(req,res)=>{

        application.app.controllers.cadastro_controller.cadastro.salvar_arquivo(application,req,res);

    })

    application.get("/arquivo_opcoes", (req, res)=>{

        res.send("ok");

    })

}