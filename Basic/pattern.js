/*

1) 

****
****
****
****

*/

let i,j
let n=5

for(i=0;i<n;i++){
    let row="";
    for(j=0;j<n;j++){
        row=row+" *"
    }
    console.log(row)
}
console.log()

/*

2) 

*
**
***
****

*/

for(i=0;i<n;i++){
    let row="";
    for(j=0;j<i+1;j++){
        row+=" *"
    }
    console.log(row)
}
console.log()

/*

3) 

1
12
123
1234
12345

*/

for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row=row+" "+j
    }
    console.log(row)
}
console.log()


/*

4) 

12345
1234
123
12
1

*/

for(i=0;i<n;i++){
    let row=""
    for(j=0;j<(n-i);j++){
        row=row+" "+(j+1)
    }
    console.log(row)
}
console.log()


/*

5)

     *
    **
   ***
  ****
 *****

*/

for(i=0;i<n;i++){
    let row=""
    for(j=0;j<(n-(i+1));j++){
        row=row+"  "
    }
    for(let k=0;k<(i+1);k++){
        row=row+" *"
    }
    console.log(row)
}
console.log()


/*

6)

1
10
101
1010
10101
101010

*/

for(i=1;i<=n;i++){
    let row=""
    for(j=1;j<=i;j++){
        if(j%2===0) row=row+" 0"
        else row=row+" 1"
    }
    console.log(row)
}
console.log()

/*

7)

1
01
010
1010
10101


*/
let toggle=1
for(i=0;i<n;i++){
    let row="";
    for(j=0;j<=i;j++){
        row=row+" "+toggle
        toggle=toggle===1 ? 0 : 1
    }
    console.log(row)
}
