let objeto = {
  food: {"coxinha": 1.50, "sopa": 5 },
  drink: {"coca": 3.50, "guarana": 3.50, "agua": 2, },
 }

 let tratar = ["guarana", "coxinha", "agua", "sopa", "coxinha", "agua", "sopa", "sopa"];


 let food = Object.entries(objeto.food)
 let drink = Object.entries(objeto.drink)





let test = food.concat(drink)


console.log(test.includes("guarana"))


let valor = 0
tratar.forEach((element) => {
  switch (element){
    case 'coxinha':
      valor += 1.50;
      break;
    case 'sopa':
      valor += 5;
      break;
    case 'coca':
      valor += 3.50;
      break;
    case 'guarana':
      valor += 3.50;
      break;
    case 'agua':
      valor += 2;
      break;
  }
})

console.log(valor)