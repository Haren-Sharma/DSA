// var merge1 = function(nums1, m, nums2, n) {
//     let nums1_copy=nums1.slice(0,m);
//     let p1=0,p2=0,i=0
//     while(p1<m && p2<n){
//         if(nums1_copy[p1] < nums2[p2]){
//             nums1[i]=nums1_copy[p1]
//             p1++
//         }
//         else{
//             nums1[i]=nums2[p2]
//             p2++
//         }
//         i++
//     }    
//     console.log(p1)
//     while(p1<m){
//         console.log("INside Loo 1")
//         nums1[i]=nums1_copy[p1]
//         p1++
//         i++
//     }
//     console.log(p2)
//     while(p2<n){
//         console.log("INside Loo 2")
//         nums1[i]=nums2[p2]
//         p2++
//         i++
//     }
//     return nums1
// };

var merge2=function(nums1,m,nums2,n){
    let p1=m-1,p2=n-1,i=m+n-1
    while(p1>=0 && p2>=0){
        if(nums1[p1]<nums2[p2]){
            nums1[i]=nums2[p2]
            p2--
        }
        else{
            nums1[i]=nums1[p1]
            p1--
        }
        i--
    }
    while(p1>=0){
        nums1[i]=nums1[p1]
        p1--
        i--
    }
    while(p2>=0){
        nums1[i]=nums2[p2]
        p2--
        i--
    }
    return nums1
}


console.log(merge2([1,2,3,8,9,10,0,0,0],6,[2,5,6],3))
