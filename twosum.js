/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export var twoSum = function(nums, target) {
    let i, j;
    console.log(nums);
    console.log(target);
    for(i = 0; i <= nums.length - 1; i++){
        console.log(`i is ${i}`);
        for(j = i+1; j <= nums.length-1; j++){
            console.log(`j is ${j}`);
            const sum = nums[i]+nums[j];
            console.log(`sum is ${sum}`);
            if(sum == target){
                const ret = [];
                ret.push(i, j);
                console.log(ret);
                return ret;
            }
        }
    }
};
