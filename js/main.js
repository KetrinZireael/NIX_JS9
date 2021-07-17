function array(myArray) {
   let newArray = [];
   let sum = 0;
   
   for(i = 0; i < myArray.lenght; i++) {
        newArray.push(myArray[i] + sum);
        console.log(newArray);
   } 
}