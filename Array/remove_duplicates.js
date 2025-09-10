/*
Non decreasing sorted array
remove the duplicates in place 
return the k unique number of elements and modify the array as well
not concerned about the other elements



*/

const arr = [1,2,2,3,4,4];

function remove_duplicates(arr) {
  let i,
    k = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[k]) {
      k++;
      arr[k] = arr[i];
    }
  }
  console.log("Array:", arr);
  console.log("Number of unique elements:", k + 1);
}
remove_duplicates(arr)