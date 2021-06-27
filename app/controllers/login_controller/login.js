module.exports.login = (app, req, res)=>{
    
    res.render("login/login_view",{validacao:{}, verif: {}});



}

module.exports.autenticar =(app, req, res)=>{

    var dadosLogin = req.body;

    req.assert("usuario","o campo usuário não pode está vazio").notEmpty();
    req.assert("senha", "o campo senha é obrigatório").notEmpty();

    var erros = req.validationErrors();



    if(erros){

        res.render("login/login_view",{validacao: erros, dados:dadosLogin, verif:{}})
        return

    }

    var conexao = app.config.db();

    var autentic = app.app.models.dbDAO;


    autentic.validarUsuario(conexao, dadosLogin, req, res);








}
