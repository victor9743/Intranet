

var data = new Date();



function semana(valor){

    var semana = ["domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabádo"];

    for(var x=0; x<=semana.length; x++){

        if(valor == x){

            return semana[x];
        }
    }

}

function mes(valor){

    var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]


    for(var y= 0; y<mes.length; y++){

        if(valor == y){

            return mes[y]
        }

    }

}
console.log();

document.getElementById("data_login").innerHTML += semana(data.getDay()) + "  " + data.getDate() + " de " + mes(data.getMonth()) + " de " + data.getFullYear();


document.getElementById("modalClose").onclick =()=>{

    document.getElementById("aviso").style.display="none";

}