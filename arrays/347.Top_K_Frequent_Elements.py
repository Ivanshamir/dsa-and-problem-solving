# O(N) time | O(N) space

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        frequency = [[] for i in range(len(nums)+1)]
        result = []
        
        for num in nums:
            count[num] = 1 + count.get(num, 0) 
        
        for nmbr,cnt in count.items():
            frequency[cnt].append(nmbr)
            
        for stacks in range(len(frequency)-1, 0, -1):
            for num in frequency[stacks]:
                result.append(num)
                if len(result) == k:
                    return result