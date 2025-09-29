//print 1 to n

// 1 2 3 4 ..... n

const n=12

function print_num(x){
    if(x>n) return
    console.log(x)
    print_num(++x)
}
print_num(1)


