var mysql = require('mysql');

var conexao = function(){
    
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:"1234",
        database:'intranet'
    })
}

module.exports=()=>{
    return conexao;
}