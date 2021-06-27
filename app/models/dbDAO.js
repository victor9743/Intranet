const cPass = require("crypto");


module.exports = ()=>{

    /* USUÁRIOS INICIO */

   this.salvarUsuario= (conexao, usuario, callback)=>{

    var passcrypto = cPass.createHash("md5").update(usuario.senha).digest("hex");

    usuario.senha = passcrypto;

    conexao.query("insert into usuarios set ?", usuario, callback);

   }
   this.mostrarUsuario = (conexao,callback)=>{
       conexao.query("select * from usuarios ", callback);
   }

   this.pegarUsuario =(usuario, conexao, callback)=>{

        conexao.query("select * from usuarios where id_usuario=" + [usuario.id_usuario],callback);
   }

   this.editarUsuario =(usuario,conexao, res )=>{
       

        var passcrypto = cPass.createHash("md5").update(usuario.senha).digest("hex");
        var passcrypto2 = cPass.createHash("md5").update(usuario.senha2).digest("hex");

        usuario.senha = passcrypto;
        usuario.senha2 = passcrypto2;


        conexao.query("select * from usuarios where senha= '"+usuario.senha+"'" , (err,result)=>{
            
            if(result[0] != undefined){

                conexao.query("update usuarios set usuario= ?, senha= ? where id_usuario= ?",[usuario.usuario, usuario.senha2, usuario.id_usuario])  
                res.redirect("/usuarios");
                return;
            }else{

                res.send("erro");
            }

        })
       
   }

   this.excluirUsuario =(id_usuario, conexao, callback)=>{

    conexao.query("delete from usuarios where id_usuario="+id_usuario.id_usuario, callback);

   }

   this.validarUsuario =(conexao, dadosLogin, req, res)=>{

        var passcrypto = cPass.createHash("md5").update(dadosLogin.senha).digest("hex");

        dadosLogin.senha = passcrypto;

        if(dadosLogin.usuario && dadosLogin.senha){

            conexao.query('select * from usuarios where usuario = ? and senha = ?', [dadosLogin.usuario, dadosLogin.senha] , (err, result)=>{

                if (result.length >0 ){

                    req.session.logado = true;
                    req.session.usuario = dadosLogin.usuario;

                    res.redirect("home")
                    return;
                }
                else{
                   res.render("login/login_view",{validacao:{}, verificacao:{}, verif: result})
                }

                res.end();
            })

        }  
   }

   /* FIM USUARIOS*/

   /* ARQUIVOS INICIO */

   this.mostrarArquivos = (conexao, callback)=>{

    conexao.query("select * from arquivos", callback)

   }


   this.salvarArquivo =(conexao, arquivo, res)=>{

        conexao.query("insert into arquivos set ?",arquivo, (err, result)=>{

         
            res.redirect("/arquivo");

        });

       

   }



    return this;
}