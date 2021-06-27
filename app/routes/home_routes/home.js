module.exports =(application)=>{

    application.get("/home", (req,res)=>{

        application.app.controllers.home_controller.home.home(application,req,res);

    })
}