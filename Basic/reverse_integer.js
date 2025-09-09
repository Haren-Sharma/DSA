function reverse_of_integer(num){
    let num_copy=num
    num=Math.abs(num)  // for considering -ve numbers as well
    let rev=0
    let last_digit;
    while(num>0){
        last_digit=num%10
        rev=(rev*10) + last_digit
        num=Math.floor(num/10)
    }
    return num_copy<0 ? -rev : rev
}

console.log(reverse_of_integer(123344))
console.log(reverse_of_integer(-6001))