//ATIVIDADE 1

// function recebeString(str){
//     let arr = [];

//     if(str.length >= 5){
//         arr.push(str);
//     }
//     return arr;
// }
// console.log(recebeString("casa"));

//ATIVIDADE 2

// function tipoNumber(indice, array){
//         if(indice >= 0 && indice < array.length){
//             return array[indice]
//         }else{
//             return 'Indice fora da array';
//         }
//     }
//     let indice = 5;
//     let array = ['Hermanoteu', 'Olonéia', 'Migalatéia', 'Godart']

//     console.log(tipoNumber(indice, array));

//ATIVIDADE 3

// let arrNumber = [1,2,3,4,5,6,7,8,9,10];

// function recebeNumeroInteiro(num){
//     if (arrNumber[num] % 2 === 0){
//         return 'O valor encontrado nessa posição é par';
//     }
//     return 'O valor encontrado nessa posição é impar';
    
// }
// console.log(recebeNumeroInteiro(0))

//ATIVIDADE 4

// let nomes = ['Pedro', 'Rafael', 'José']

// function nomeMaior (nomes){
//     if (nomes.length === 1){
//         return `O nome ${nomes[0]} é o maior da lista`
//     }
//     let maiorNome = nomes[0];
//     for (let i = 1; i< nomes.length; i++){
//         if (nomes[i].length > maiorNome.length){
//             maiorNome = nomes[i];
//         }
//     }
//     return `O nome ${maiorNome} é o maior da lista`;

// }
// console.log(nomeMaior(nomes))

//ATIVIDADE 5

// let numeros = [1,4,6,9,11,1,1,2];

// function somaPosicao(numeros){
//     if (numeros.legth < 2){
//         return 'A lista deve conter pelo menos dois numeros'
//     }
//     let soma = numeros[numeros.length - 2] + numeros[numeros.length - 1];
//     console.log(soma);
//     if (soma % 2 === 0 ){
//         return 'A soma é multiplo de 2';
//     }else{
//         return 'A soma não é multiplo de 2'
//     }

// }
// console.log(somaPosicao(numeros))

//ATIVIDADE 6

// let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];

// function verificaNomes(names, name, num){
//     let recebeNome = name.toLowerCase();
//     let nomeDaLista = names[num].toLowerCase();
//     if (recebeNome === nomeDaLista){
//         return 'Acertei';
//     }
//     return 'Não é quem pensava';

// }
// console.log(verificaNomes(nomes, 'Rafael', 1));

//ATIVIDADE 7

let numeros = [1,2,3,4,5,6,10,7];
let outrosNumeros = [5,7,9,4,2,3,9,2,1];

function arrMaior(numeros, outrosNumeros){
    let maiorArray;

    if (numeros.length > outrosNumeros.length){
        maiorArray = numeros;
    }else if (outrosNumeros.length > numeros.length){
        maiorArray = outrosNumeros
    }else{
        return 'As listas tem o mesmo tamanho'
    }
    return `A maior lista é a lista cujo último número é: ${maiorArray[maiorArray.length - 1]}`;
}
console.log(arrMaior(numeros, outrosNumeros))