console.log('holas mis niñas lindas');
//var hora = 1;
// if(hora<12){
//     console.log('buenos dias');
// }
// if(hora>12){
//     console.log('buenas tardes');
// }
// switch(hora){
//     case 10:
//         console.log('son las 10 de la mañana');
//         break;
//     case 15:
//         console.log('son las 3 de la tarde');
//         break;
//     default:
//         console.log('no tengo saludo a esta hora');
//         break;
// }

//funciones
// var num1 = 10;
// var num2 = 20;
// function suma(){
//     return console.log(num1+num2);
// }
// suma();
// function suma(num1, num2){
//     return console.log(num1+num2);
// }
// suma(10,40);
//const numero = 50;
// for(i=0; i<=10; i++){
//     let numero = 40;
//     console.log(numero);
// }
// console.log(numero);
// const numero=[50];
// numero.push(20);
// if(true){
//     let numero=40;
//     console.log('dentro del if ' + numero);
// }
// console.log('fuera del if '+numero);

// funciones normales y funciones de flecha
// function sumar(num) {
//     console.log(num);
// }
// sumar(20)
// const sumarflecha = (num1,num2) => (num1+num2);

// const resultado = sumarflecha(10,30);
// console.log(resultado);

// const mensaje = (nombre, apellido) => "hola soy " + nombre + apellido;

// const mensajefinal = mensaje("christian ", "iacobucci");
// console.log(mensajefinal);

//template string
// const numero = (num,num2) =>  `el numero es: ${num + num2}`
//     //return("el numero es "  + num);
   
// const numerofinal=numero(40,20);
// console.log(numerofinal)

//objetos
// const hijos = {
//     nombres: [`Isabel`, 'Fiorella','Edoardo','Alejandro'],
//     apellido: `Iacobucci Diaz`,
//     edad: 7
// }
// hijos.id = 3
// console.log(hijos.nombres[2])
// console.log(hijos.apellido)
// console.log(hijos.edad)
// console.log(hijos.id)

// const {apellido} = hijos
// console.log(apellido)

// mas trabajo con objetos

// const web = {
//     nombre: "web/javascrip",
//     links: {
//         enlace:"www/facebook.com"
//     },
//     redsociales: {
//         youtube: {
//             enlace :"youtube.com",
//             nombre: "ceiryoutube"
//         }
//     }
// }
// const {enlace}=web.redsociales.youtube
// console.log(enlace)

//fetch
// fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then(res =>  res.json())
//     .then(data => { 
//         console.log(data.results)
//         data.results.forEach(element => {
//             console.log(element.name)
//         });
//     })

//async await map 
// const obtenerpokemon = async() => {
//     try {
//         const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
//         const data = await res.json()
//         const arraynombres = data.results.map(nompok => nompok.name)
//         console.log(arraynombres)
//     //    console.log(data.results)
//     //     data.results.forEach(element => {
//     //         console.log(element.name)
//     //    });
//     } catch (error) {
//         console.log(error)
//     }
// }
// obtenerpokemon()

//async await filter

const obtenerpokemon = async() => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await res.json()
        const arraynombres = data.results.filter(nompok => nompok.name !== "bulbasaur")
        console.log(arraynombres)
    //    console.log(data.results)
    //     data.results.forEach(element => {
    //         console.log(element.name)
    //    });
    } catch (error) {
        console.log(error)
    }
}
obtenerpokemon()