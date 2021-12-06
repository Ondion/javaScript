

// console.log(parseInt("5") + 5)

// let frase = "1 cachaça, 5 cervejas e 1 copo de vinho";


function hydrate(frase) {
  let contador = 0;
  for(index of frase){
    if(index == "1" || index == "2" || index == "3" || index == "4" || index == "5" || index == "6" || index == "7" || index == "8" || index == "9" ){
      contador = contador + parseInt(index)
    }
  }
  
  if (contador == 1){
    console.log(contador.toString() + " copo de água");
    return contador.toString() + " copo de água";
  } else{
    console.log(contador.toString() + " copos de água");
    return contador.toString() + " copos de água";
  }
}

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")