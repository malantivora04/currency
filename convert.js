function convert(){
var num = document.getElementById("t1").value ;
var dollar = 0.012;
var rupToDollar = num * dollar;

document.getElementById('p1').innerHTML = num + "rupees is equals to " + rupToDollar + " dollar"; 


}