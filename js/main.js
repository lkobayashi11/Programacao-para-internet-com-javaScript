/*var nome = "Lidia Kobayashi";
var n1 = 2
var n2 = 10
var frase = "Japão é o melhor time do mundo";
alert("Bem vindo " + nome + " tem " + n2 + " anos");
console.log(nome);
console.log(n1*n2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));
*/

//Lista 

//var lista = ["maca", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//alert(lista[1]);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - ")); //junta a string ao declarado acima

// Dicionário
/*
var fruta = {nome:"maca", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var fruta = [{nome:"maca", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
//console.log(fruta);
//alert(fruta[1].nome);

/*
var idade = prompt("qual sua idade?");
if (idade >= 18) {
    alert ("maior de idade");
} else{
    alert ("menor de idade");    
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count)
    alert(count);
    //count=count + 1;
    count++;
}
*/

/*
var count;
for(count=0;  count <= 5; count++){
    alert(count);
}
*/

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

function setreplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function valida_idade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else{
        validar = false      
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(valida_idade(idade));

//alert(soma(5,10));
//alert(setreplace("Vai Japão", "Japão", "Brasil"));
*/

function botao(){
   // alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   //console.log(document.getElementById("agradecimento"));

}
function redirecionar(){
    window.open("https://uol.com.br/");
    //window.location.href="https://uol.com.br/";
}

function trocar(elemento){
  //  alert("trocar texto");
 //   document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse"
 elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui" 
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada")
}


function funcaoChange(elemento){
    console.log(elemento.value)

}

function autonomia(quantidadeDeCombustivel, rendimento){
    var autonomiaTotal = 0;
    autonomiaTotal = quantidadeDeCombustivel*rendimento;
    console.log(autonomiaTotal)
	return autonomiaTotal
}
console.log (autonomia(30,12))