# Problem Solving In Leetcode
This repository is mainly for learning purpose. I will try to solve different types of problems as well as in different type of languages in leetcode IN SHA ALLAH. 

# Link and strategy
| Problem | Link | Description | Complexity |
| ------------ | ------------- | ------------- | ------------- |
| 121.Best Time to Buy and Sell Stock | [Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Solved can be using sliding window algorithm, two pointers use: i and i+1, loop will be continuing i+1 < len(prices). If i > i+1 then change the position otherwise differentiate the current i and i+1 and track the max | Time: O(N), Space: O(1) |
| 283. Move Zeroes | [Link](https://leetcode.com/problems/move-zeroes/) | Solved can be using quick sort or quick select algorithm, one pointers use: left. If i != 0 then swap the position with left and only for that inecrement left by 1 | Time: O(N), Space: O(1) |
| 122. Best Time to Buy and Sell Stock II | [Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | Same as 121. We keep track left and right, if right < left then swap left and right otherwise differentiate between left and right and add with total | Time: O(N), Space: O(1) |
| 347. Top K Frequent Elements | [Link](https://leetcode.com/problems/top-k-frequent-elements/) | Using bucket sort algorithm. First count total numbers appear and save in hashmap(dictionary).Then create another hashmap for frequency. Finally loop over frequency and found out top K elements | Time: O(N), Space: O(N) |
| 14. Longest Common Prefix | [Link](https://leetcode.com/problems/longest-common-prefix/) | We compare the letters of first element of array with others. First loop for letters of first element of array and 2nd loop for compare the specific letter with current element letter. If the letter is not silimar then return otherwise add the letter with final result | Time: O(M.N) where M is the total chracter of first element and N is the total elements of array, Space: O(1) |
