function insertion_sort(arr) {
  //you can think of it as arraning a deck of cards by picking
  // cards one by one and arranging
  for(let i=1;i<arr.length;i++){
    let current=arr[i]
    let prev=i-1
    while(arr[prev]>current && prev>=0){
        arr[prev+1]=arr[prev]
        prev--;
    }
    arr[prev+1]=current;
  }
}
const arr = [3,4,5,7,1,2];
console.log(arr);
insertion_sort(arr);
console.log(arr);
