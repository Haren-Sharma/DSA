//printing fibonaci number
// function fibo(n){
//     if(n<=1) return n
//     return (fibo(n-2)+fibo(n-1))
// }
// const res=fibo(3)
// console.log(res)

//printing the fibonaciu series
function printSeries(n, a = 0, b = 1, i) {
  if (i > n) return;
  console.log(a);
  printSeries(n, b, a + b, ++i);
}
printSeries(10, 0, 1, 1);
