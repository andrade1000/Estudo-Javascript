/* script para solicitação de cor ao usuario 
quando o usuario digita a cor a cor desejada,
então iremos mudar a cor de fundo body caso o usuario 
digite uma cor não listada mudaremos a cor de fundo para uma pre
estabelecida e sera exibida  uma mensagem ao usuario*/

var cor = prompt("digite:\n\n"+
            "1 - preto"+
            "\n2 - amarelo"+
            "\n3 - vermelho"+
            "\n4 - azul"+
            "\n5 - laranja");

if(cor == 1){
    document.body.style.backgroundColor="black";
}
else if(cor == 2){
    document.body.style.backgroundColor="yellow";
}
else if(cor == 3){
    document.body.style.backgroundColor="red";
}
else if(cor == 4){
    document.body.style.backgroundColor="blue";
}
else if(cor == 5){
    document.body.style.backgroundColor="orange";
}
else{
    document.body.style.backgroundColor="teal";
    alert("Voce Digitou uma Opsção Inexistente");
}
