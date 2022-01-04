<?php

/**
 * Question link: https://leetcode.com/problems/two-sum/
 */

class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer[]
 */
    function twoSum($nums, $target) {
        for($i=0; $i < count($nums); $i++){
            $complement = $target - $nums[$i];

            if(in_array($complement, $nums) &&  ($i !== array_search($complement, $nums))) return [$i, array_search($complement, $nums)];
        }
    }
}