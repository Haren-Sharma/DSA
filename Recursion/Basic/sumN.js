//sum of first n numbers
// let n=10

// function sum_of_n(num){
//     if(num===1) return 1
//     return num+sum_of_n(num-1)
// }

// const res=sum_of_n(n)
// console.log(res)


//sum of all the numbers in an array
const arr=[10,20,30]
const last=arr.length-1

function sum_of_arr(i){
    if(i===last){
        return arr[last]
    }
    return (arr[i] + sum_of_arr(++i))
}
const res=sum_of_arr(0)
console.log(res)