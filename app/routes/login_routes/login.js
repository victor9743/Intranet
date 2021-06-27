module.exports = (application)=>{

    application.get('/',(req, res)=>{
        application.app.controllers.login_controller.login.login(application,req,res);
    })

    application.post('/validacao', (req, res)=>{
        application.app.controllers.login_controller.login.autenticar(application,req,res);
    })

}