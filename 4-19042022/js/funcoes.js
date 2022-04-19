//encontra o maior valor em um array
function maior(numeros){

    //vamos transformar os numeros em numeros 
    //realizando um parse para inteiros
    for(var c = 0 ; c < numeros.length ; c++){
        numeros[c] = parseInt(numeros[c]);
    }
    var m = numeros[0];
    for(var i = 1 ; i < numeros.length ; i++ ){
        if(numeros[i] > m ) {
            m = numeros[i]

        }
    }
    return m;
}
//oncontra o menor valor em um array
function menor(numeros){
    var m = numeros[0];
    for(var i = 1 ; numeros.length ; i++){
        if(numeros[i] < m){
            m = numeros[i]
        }
    }
    return m;
}
// verificar se um campo esta vazio e alertar o usuario
function verificarvazio(controle){
    if(controle.value == "" || controle.value == null){
    alert("o campo "+controle.id+"não pode sr vazio");
    controle.setFocus();
    }
}
function datahora(){
    return 
    new Date().toLocaleDateString()+
    " - "+new Date().toLocaleDateString()
}