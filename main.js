const str = 'Hello World!';
document.querySelector('h1').innerHTML = str +" "+ str.length ;


var fruits = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
var newArr = [];
for (var i = 0; i < fruits.length; i += 2){
  newArr.push(fruits.slice(i, i+2));
}

console.log(fruits.length/2);
console.log(newArr);
