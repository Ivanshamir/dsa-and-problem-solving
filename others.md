## Other links:
1. **Are nested for-loops always O(n^2)?** 
The method clearly depends on the amount of items, it yields Theta(|items|). So if n is the amount of items, then you have Theta(n), that is absolutely correct. 
If there is a dependency from items to boxes, e.g. a box can maximally contain 5 items, then you can also express the complexity depended on the amount of boxes. It then obviously also yields Theta(|boxes|).
If there is no dependency then you can not express the complexity with the amount of boxes since it then does not depend on it Just choose whatever you find most appropriate for your audience.
"Are nested for-loops always O(n^2)?"
To your other question, the answer is no. They aren't always O(n^2). You can easily create a situation where one of the loops affects the iterations of the other, yielding a different complexity.
A small constructed example:
```
for (int i = 0; i < n; i++) {
    for (int j = i; j < i + 5 && j < amount; j++) {
        ...
    }
}
```
The loop may, at first glance, look like O(n^2) but the inner loop maximally creates 5 iterations for every iteration of the outer loop. So we receive only 5 * n iterations in total, not something like n^2. The complexity thus is O(n). [Link](https://stackoverflow.com/questions/46655902/are-nested-for-loops-always-on2)

2. **Important func for python:** `ord()` returns the Unicode code from a given character. [Link](https://www.geeksforgeeks.org/ord-function-python/)
3. 
