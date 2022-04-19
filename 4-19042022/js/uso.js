//verificar qual a pagina que ira abrir este arquivo
//javascript
//pega a urg completa do navegador
var pagina = window.location;
console.log(pagina);
//vamos quebrar a urg onde houver barra
pagina = pagina.split("/");
console.log(pagina);
//pegar o ultimo elemento do array pagina criado 
//acima
pagina = pagina[pagina.length-i];
console.log(pagina);
if(pagina == "home.html"){

    document.body.style.backgroundColor="rgb(150,150,150)";
    /*
    acessar a caixa (lount )catturar esses numeros 
    e utilizar a função maior para 
    encontrar o maior valor entre eles
    */
//    referenciar um elemento de loyut da tela de home
const txtN = document.getElementById("txtN");
//aplicar um evento chamado onblur, ou seja
//quando a caixa perder o foco 
txtN.onblur = function(){
    //vamos capturar o valor contido em txtN, ou seja, os numeros dentro
    //desta caixa e alocar em um array
    var valores = txtN.values.split(",");
    alert(maior(valores));
}
}
if(pagina=="formulario.html"){
    document.body.style.backgroundColor="rgb(120,200,150)";
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");

    nome.onblur = ()=>{
        verificarvazio(nome.value);
    };
    email.onblur = ()=>{
        verificarvazio(email.value);
    };
    cpf.onblur = ()=>{
        verificarvazio(cpf.value);
    };
    telefone.onblur = ()=>{
        verificarvazio(telefone.value);
    };
}