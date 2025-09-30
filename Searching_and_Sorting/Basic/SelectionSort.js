function selection_sort(arr) {
  //it will find the min element and put it in the front
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
}
const arr = [1,9, 8, 7, 6, 5, 4, 3, 2, 10];
console.log(arr);
selection_sort(arr);
console.log(arr);
