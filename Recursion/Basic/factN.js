function factorial(n){
    if(n===1) return 1
    return (n * factorial(--n))
}

const res=factorial(5)
console.log(res)