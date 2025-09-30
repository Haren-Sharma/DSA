function merge(left, right) {
  let i = 0,
    j = 0;
  let arr = [];
  while (i < left?.length && j < right?.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }
  return [...arr, ...left.slice(i), ...right.slice(j)];
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

const arr_c = [7,6,5,4,3,2,1];
console.log(arr_c);
const res = mergeSort(arr_c);
console.log(res);
