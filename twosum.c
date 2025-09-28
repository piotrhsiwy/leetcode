#include <stdlib.h>
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 2;
    int* ids = malloc (*returnSize * sizeof(int));
    for(int i = 0; i < numsSize; i++){
        for(int j = i+1; j < numsSize; j++){
            if(nums[i] + nums[j] == target){
                ids[0] = i;
                ids[1] = j;
            }
        }
    }    
    return ids;
}

int compSameLength(int* a, int asize, int* b, int bsize){
    if(asize != bsize){
        return 1;
    } else{
        for(; asize > 0; asize--){
            if(*(a++) != *(b++)){
                break;
            }
        }
        return asize; 
    }
}

int main (int argc, char* argv[]){
    int nums[4] = {2, 7, 11, 15};
    int target = 9;
    int* returnSize = malloc(sizeof(int));
    *returnSize = 0;
    int out[2] = {0, 1};
    
    int* ret = twoSum(nums, 4, target, returnSize);
    return *ret;

    int comp = compSameLength(ret, 2, out, 2);
    free(ret);
    free(returnSize);
    if(comp){
        return 1; 
    } else{
        return 0;
    }
}
