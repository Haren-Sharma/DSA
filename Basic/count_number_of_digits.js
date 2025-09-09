/*Count the number of digits in a number*/

function count_digits(num){
    if(num===0) return 1
    if(num<0) num=-num
    let count=0;
    while(num>0){
        count++;
        num=Math.floor(num/10);
    }
    return count
}

console.log(count_digits(-123333))
