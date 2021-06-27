/* INICIO ARQUIVOS */

module.exports.arquivo =(application, req, res)=>{


   

    var conexao = application.config.db();
    var mostrar_arquivos = application.app.models.dbDAO;

    mostrar_arquivos.mostrarArquivos(conexao, (err, result)=>{
        res.render("cadastro/arquivosTipos_view",{mensagem:{}, resultado: result});
    });




}

module.exports.salvar_arquivo =(application, req, res)=>{

    var arquivo = req.body;

    var conexao = application.config.db();
    var salvar_Arquivo = application.app.models.dbDAO;

    salvar_Arquivo.salvarArquivo(conexao, arquivo,res);

}