let calcular =document.getElementById("btn");
let entrada = document.getElementById("entrada");
let salida = document.getElementById ("salida");

let fibo = [1,1,2,3,5]
let numero = 2;

entrada.addEventListener("input", (evento)=>{
    numero = evento.target.value;
    console.log(numero);
});

calcular .addEventListener("click", ()=>{
    let hijo = document.createElement("li")
    for(let i=2; i<numero; i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
}
hijo.innerHTML=fibo
salida.appendChild(hijo)
fibo= [1,1]
});
console.log(fibo)