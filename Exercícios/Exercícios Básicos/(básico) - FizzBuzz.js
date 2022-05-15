// const number = 15;


// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i ++) {
//       if(i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//   } else if(i % 3 === 0 && i % 5 !== 0) {
//       console.log('Fizz');
//   } else if(i % 3 !== 0 && i % 5 === 0) {
//       console.log('Buzz');
//   } else {
//       console.log(i);
//   }
//   }

// for (let i = 1; i <= number; i++) {
//   const teste = (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : ''); 
//   console.log(teste ? teste : i)
// }

// const novoArray = [];

// duracoes.forEach((e, i, a) => {
//   duracoes.forEach((ele, ind, arra) => {
//     e + ele <= 3 && novoArray.push(ele);
//   });
// });

// let unique = [...new Set(novoArray)];
// console.log([...new Set(novoArray)].length);

// const numeroDeDias = [];
// duracoes.forEach((e) => {
//     duracoes.forEach((ele) => {
//         e + ele <= 3 && numeroDeDias.push(ele);
//     });
// });
// return [...new Set(numeroDeDias)].length;



// const duracoes1 = [2.9, 0.2, 1.3, 2.4, 0.1];
// const novo = duracoes.sort((a, b) => a - b);
// let arrayColetor = [0];
// let incremento = 0;

// novo.forEach((e) => {
//   // console.log(e, (novo[i + 1] ? novo[i + 1] : 0));
//   if(arrayColetor[incremento] + e <= 3) {
//     arrayColetor[incremento] = arrayColetor[incremento] + e; 
//   } else {
//     incremento += 1;
//     arrayColetor[incremento] = arrayColetor[incremento] + e; 
//   }
// });

// console.log(arrayColetor.length);

// const array = [];
// let acumulador = 0;
// let indice1 = 0;
// let indice2 = 0;

// duracoes1.forEach((e, i) => {
//   duracoes1.forEach((ele, ind) => {
//     if(e + ele <= 3 && acumulador < e + ele){
//       acumulador = e + ele;
//       indice1 = i;
//       indice2 = ind;
//     }
//   });
//   array.push(acumulador);
//   acumulador = 0;
// });
// console.log(acumulador, indice1, indice2);
// console.log(array);


// teste.forEach((e, i) => {
//   teste.forEach((ele) =>{
//     console.log('interação', i, 'valores:', e, ele);
//   });
//   // teste.shift();
//   teste.pop();
//   console.log(teste);
// });
    
// let teste = [2.9, 0.2, 1.3, 2.4, 0.1];
const array = [];
// let acumulador = 0;

let acumulador = 0;
let indice1 = 0;
let indice2 = 0;
while (teste.length > 0) {

  teste.forEach((e, i, a) => {
    teste.forEach((ele, ind) => {
      // console.log(e, '>>>', ele);
      if(e + ele <= 3 && acumulador < e + ele){
        acumulador = e + ele;
        indice2 = i;
      }
    });
    teste.shift();
    array.push(acumulador);
    acumulador = 0;
  });
  
  teste = teste.filter((e, i) => {
    console.log(e, i, indice2);
    return i !== indice2;
  });
  indice2 = 0;
}

console.log(array);


// let indice1 = 0;
// let indice2 = 0;

// teste.forEach((e, i) => {
//   teste.forEach((ele, ind) => {
//     if (e + ele <= 3 && acumulador < e + ele) {
//       acumulador = e + ele;
//       indice1 = i;
//       indice2 = ind;
//     }
//   });
//   array.push(acumulador);
//   acumulador = 0;
// });