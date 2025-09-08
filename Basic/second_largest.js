/*
Second Largest Number
*/

const arr = [10,20,30];
let first_largest = -Infinity;
let second_largest = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if(arr[i]>first_largest){
    second_largest=first_largest;
    first_largest=arr[i]
  }
  else if(arr[i]>second_largest){
    second_largest=arr[i]
  }
}
console.log(second_largest);
