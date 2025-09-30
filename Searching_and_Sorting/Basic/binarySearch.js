function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] < target) left = middle + 1;
    else if (arr[middle] > target) right = middle - 1;
    else return middle;
  }
  return -1;
}

const arr = [4];
const idx = binarySearch(arr,4);
console.log(idx);
