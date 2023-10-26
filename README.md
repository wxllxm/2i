# 2i

- Should look for pairs of numbers in the array which sum to X.
- Each array element can only be used in one pair.
- Should return the count of how many such pairs it finds.

- Can assume that the array passed to the function has already been sorted in ascending order.

Example..

My number is 5

Arrays of numbers is: 1, 3, 5, 6, 9 (total is 0)
Arrays of numbers is: 2, 3, 6, 7, 9 (total is 1) [2 & 3 is used]
Arrays of numbers is: 1, 2, 2, 2, 3 (total is 2) [all numbers are used]

start count = 0

Loop through each number
If number and next number = x ... then add to count && add numbers to 'usedNumbersArray'
