import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { romanConvert } from './roman';
import $ from 'jquery';


var arrayArg =  [[1000, "M"], [900, "CM"], [500,"D"], [400, "CD"], [100, "C"], [90,"XC"], [50,"L"], [40,"XL"], [10,"X"], [9,"IX"], [5,"V"], [4,"IV"], [1,"I"]];

$(function(){
 $("form").submit(function(event){
   event.preventDefault();
   // debugger;
  var num = parseInt($("input#numberInput").val());
   // alert(num);

 var result = romanConvert(num,arrayArg);
  // alert(result);

    $("#outputA").text(num);
    $("#outputB").text(result);

   $("#output").show();


 });

});
