// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

var searchInsert = function (nums, target) {
    if (target == 0 && nums[0] > 0) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target && nums[i] !== target) {
            return i;
        }
        if (i === nums.length - 1) {
            return i + 1;
        }
    }
};

console.log(searchInsert([1, 3, 5, 6], 7));

console.log(searchInsert([1, 3, 5, 6], 2));

console.log(searchInsert([2, 5], 1));


