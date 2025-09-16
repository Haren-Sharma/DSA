/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const nums=[0,1,0,3,12]

// for(let i=0;i<nums.length;i++){
//     if(nums[i]===0){
//         let j=i+1,k=i
//         while(j!==nums.length){
//             let temp=nums[k]
//             nums[k]=nums[j]
//             nums[j]=temp
//             j++
//             k++
//         }
//     }
// }
// console.log(nums)

let k=0
for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
        let temp=nums[k]
        nums[k]=nums[i]
        nums[i]=temp
        k++
    }
}
console.log(nums)