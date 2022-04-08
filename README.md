# Problem Solving In Leetcode
This repository is mainly for learning purpose. I will try to solve different types of problems as well as in different type of languages in leetcode IN SHA ALLAH. 

# Link and strategy
| Problem | Link | Description | Complexity |
| ------------ | ------------- | ------------- | ------------- |
| 121.Best Time to Buy and Sell Stock | [Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Solved can be using sliding window algorithm, two pointers use: i and i+1, loop will be continuing i+1 < len(prices). If i > i+1 then change the position otherwise differentiate the current i and i+1 and track the max | Time: O(N), Space: O(1) |
| 283. Move Zeroes | [Link](https://leetcode.com/problems/move-zeroes/) | Solved can be using quick sort or quick select algorithm, one pointers use: left. If i != 0 then swap the position with left and only for that inecrement left by 1 | Time: O(N), Space: O(1) |
| 122. Best Time to Buy and Sell Stock II | [Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | Same as 121. We keep track left and right, if right < left then swap left and right otherwise differentiate between left and right and add with total | Time: O(N), Space: O(1) |
