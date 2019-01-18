// Brute Force
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Hash
var twoSum = function(nums, target) {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (map[num] !== undefined) {
      return [map[num], i];
    }

    map[target - num] = i;
  }
};
