const arr=[3,1,5,4,4,5,3]

/*
1st method using extra space
*/

// const map=new Map()
// let res_val
// for(let i=0;i<arr.length;i++){
//     map.set(arr[i],(map.get(arr[i])||0)+1)
// }
// for(const [key,value] of map.entries()){
//     if(value===1) res_val=key
// }
// console.log(res_val)


/*
Using just the xor operation
a^a=0
a^0=a
*/

const res=arr.reduce((xor,item)=>xor^item,0);
console.log(res)