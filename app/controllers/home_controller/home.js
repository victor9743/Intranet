module.exports.home = (application, req, res)=>{

    
    var ok= req.session.logado

    if(ok == true){
        var usuarioSessao = req.session.usuario;
        res.render("home/home_view",{user: usuarioSessao});

    }else{
        res.render("login/login_view",{validacao:{}, verificacao:{}});
    }

   
    

}