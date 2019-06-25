export function romanConvert(userInput, arrayPar){

var remainder;
var string="";
remainder=userInput;
  for (var i=0; remainder > 0; i++){

   if (remainder >= arrayPar[i][0]){
     remainder=remainder-arrayPar[i][0];
     string += arrayPar[i][1];

     i=i-1;
    }
  }
 return string;
}
