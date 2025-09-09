/*
Second Largest Number
*/
function second_largest(arr) {
  if (arr.length < 2) return null;

  let first_largest = -Infinity;
  let second_largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first_largest) {
      second_largest = first_largest;
      first_largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] !== first_largest) {
      second_largest = arr[i];
    }
  }
  return second_largest
}

console.log(second_largest([10, 20, 30, 30, 1]));
