// DZ1
// -------queston1----------------------------------------------------
let n = prompt("Введите целое число","");
     if (n>0){
     alert('good')   
 }else{
  alert('bad')
 }

// 2 sposob
let n = prompt("Введите целое число");
(n>0)? alert("good") : alert("bad");

// -------queston2----------------------------------------------------
let arr = [5,10,15,20,25,30,35,40,45,50]

let result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
console.log(result);

// -------queston3----------------------------------------------------
let numbers = [ 254, 115, 78, 25, 91, 45, 37 ];
  
let isHightFifty = numbers.filter(function(number) {
  return number > 50;
});
console.log(isHightFifty);