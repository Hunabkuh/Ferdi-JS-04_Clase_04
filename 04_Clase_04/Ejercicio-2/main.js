// 2- Imprime los números pares entre dos números que introduzca el usuario.

var num1 = parseInt(prompt("Imprimir números pares entre un rango de números:\r Introduzca el principio del rango: "));
var num2 = parseInt(prompt("Introduzca el final rango: "));

if (num1<num2){

    for (let i=num1; i<=num2; i++){

        if (i%2==0){
            document.write(i);
        } else {
            document.write("<br>");
        }
    }

} else{

for (let i=num2; i<=num1; i++){

        if (i%2==0){
            document.write(i);
        } else {
            document.write("<br>");
        }
    }

}