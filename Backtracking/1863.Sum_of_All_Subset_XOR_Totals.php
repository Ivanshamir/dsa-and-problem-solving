/**
 * Question link: https://leetcode.com/problems/sum-of-all-subset-xor-totals
 * Algorithm of finding all subsets of an array:
 * Create a recursive function that takes the following parameters, input array, the current index, the output array, or current subset, if all the subsets need to be stored then a vector of the array is needed if the subsets need to be printed only then this space can be ignored.
 * There are exactly two choices for very index.
 * Ignore the current element and call the recursive function with the current subset and next index, i.e i + 1.
 * Insert the current element in the subset and call the recursive function with the current subset and next index, i.e i + 1.
*/
<?php

use Solution as GlobalSolution;

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function subsetXORSum($nums) {
        $sum = 0;
        $this->recursion($nums, [], 0, $sum);
        return $sum;
    }

    function recursion($nums, $subsets, $current, &$sum) {

        $sum += array_reduce($subsets, function($carry, $item){
            return $carry ^ $item;
        });

        for($i=$current; $i < count($nums); $i++){

            $subsets[] = $nums[$i];

            $this->recursion($nums, $subsets, $i+1, $sum);

            array_pop($subsets);
        }
    }
}

//for testing. no need to put in submission
(new GlobalSolution)->subsetXORSum([3,4,5,6,7,8]);