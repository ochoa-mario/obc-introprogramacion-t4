// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
let numeroIf = 0;
if (numeroIf < 0){
  console.log(`La variable numeroIf es: ${numeroIf} Un número negativo`);
} else if (numeroIf > 0){
  console.log(`La variable numeroIf es: ${numeroIf} Un número positivo`);
} else {
  console.log(`La variable numeroIf es: ${numeroIf} Cero`);
};
// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá: Incrementar el valor de la variable en uno cada vez que se ejecute. Mostrarlo por pantalla cada vez que se ejecute.
let numeroWhile = -3;
while (numeroWhile < 3){
  console.log(numeroWhile);
  numeroWhile++;
};
// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
do {
  console.log(numeroWhile);
  numeroWhile++;
} while (numeroWhile < 3);
// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
let numeroFor = 0;
for (;numeroFor <= 3; numeroFor++){
  console.log(numeroFor);
};
// Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
let estacion = "otoño";
switch (estacion){
  case "primavera":
    console.log(`La estación es ${estacion}`);
    break
  case "verano":
    console.log(`La estación es ${estacion}`);
    break
  case "otoño":
    console.log(`La estación es ${estacion}`);
    break
  case "invierno":
    console.log(`La estación es ${estacion}`);
    break
  default:
    console.log(`La variable estación es invalida`);
};

