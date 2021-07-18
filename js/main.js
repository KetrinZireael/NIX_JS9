let myArray = [1,2,3,4];
let sum = 1;

for (i = 0; i < myArray.length; i++) {
   sum *= myArray[i];
}
console.log(sum);


function array(newArray) {
   let newSum = 1;
   
   for(i = 0; i < newArray.length; i++) {
      newSum *= newArray[i];
   }
   console.log(newSum);
}

array([5,4,6,7]);




