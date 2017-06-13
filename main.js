const str = 'Hello FreeCodeCamp !';
document.querySelector('h1').innerHTML = str ;

// Reverse a String

function reverseString(str) {
  return str.split(' ').reverse.join('');
}

reverseString("hello");

// Factorialize a Number

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for(var i=num-1; i>=1; i--){
    num *= i ;
  }
  return num;
}

factorialize(5);

// Check for Palindromes

function palindrome(str) {
  var lowerStr = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  return lowerStr == lowerStr.split("").reverse().join("");
}

palindrome("nope");

// Find the Longest Word in a String

function findLongestWord(str) {
  str = str.split(' ');
  var longestString = 0;
  str.forEach(function(string){
    if(string.length > longestString){
      longestString = string.length;
    }
  });
  return longestString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Title Case a Sentence

function titleCase(str) {
  var newStr = str.toLowerCase().split(' ');
  newStr.forEach(function(string, index){
    newStr[index] = string.charAt(0).toUpperCase() + string.slice(1);
  });
  return newStr.join(' ');
}

titleCase("I'm a little tea pot");

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var biggestArray = [];
  arr.forEach(function(thisArray){
    var biggest = 0;
    thisArray.forEach(function(thisNumber){
      if (thisNumber>biggest){
        biggest = thisNumber;
      }
    });
    biggestArray.push(biggest);
  });
  return biggestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm Ending

function confirmEnding(str, target) {
  return target == str.substring(str.length - target.length);
}

confirmEnding("Bastian", "n");

// Truncate a String

function truncateString(str, num) {
  if (str.length > num){
    if (num <= 3) {
      return str.slice(0, num)+"...";
    } else {
      return str.slice(0, num-3)+"...";
    }
  } else {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size){
    newArr.push(arr.slice(i, i+size));
  }
return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Slasher Flick

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);

// Mutations

function mutation(arr) {
  var result ;
  var firstArr = arr[0].toLowerCase();
  var secondArr = arr[1].toLowerCase();
  for(var i = 0; i<secondArr.length; i++){
    if (firstArr.indexOf(secondArr[i]) == -1){
      result = false ;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

mutation(["Mary", "Aarmy"]);

// Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// Seek and Destroy

function destroyer(arr) {
  var args = Array.from(arguments);
  var newArr = args.splice(1);
  return arr.filter(function(value){
    return newArr.indexOf(value) === -1;
  });
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

// Where do i belong

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){
    return a - b ;
  });
  num = arr.indexOf(num);
  return num;
}

getIndexToIns([2, 20, 10], 19);

// Caesars Cipher

function rot13(str) {
  var newStr =  '';
  for (var i = 0; i < str.length; i++){
    var charCode = str.charCodeAt(i);
    if (charCode < 65 || charCode > 90){
      newStr += String.fromCharCode(charCode) ;
    } else if (charCode < 78) {
      newStr += String.fromCharCode(charCode + 13) ;
    } else {
      newStr += String.fromCharCode(charCode - 13) ;
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
