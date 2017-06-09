const str = 'Hello FreeCodeCamp !';
document.querySelector('h1').innerHTML = str ;

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
