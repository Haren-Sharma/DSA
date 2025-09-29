function power_of_2(n){
    if(n===0) return 1
    return  2*power_of_2(--n)
}
const res=power_of_2(10)
console.log(res)