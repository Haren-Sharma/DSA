function bubble_sort(arr){
    let already_sorted_flag=false
    let count=0;
    for(let i=0;i<arr.length-1;i++){
        count++
        // already_sorted_flag=true
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                already_sorted_flag=false
                let temp = arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
        // if(already_sorted_flag) break;
    }
    console.log(count);
}
const arr=[9,1,2,3,4]
console.log(arr)
bubble_sort(arr)
console.log(arr)
