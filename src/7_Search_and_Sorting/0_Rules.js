/*
| You want...             | Use this formula               |
| ----------------------- | ------------------------------ |
| Middle index of array   | `Math.floor((low + high) / 2)` |
| Last element index      | `arr.length - 1`               |
| Parent index in heap    | `Math.floor((i - 1) / 2)`      |  // Always wrap (i - 1) inside parentheses
| Left child of heap\[i]  | `2 * i + 1`                    |
| Right child of heap\[i] | `2 * i + 2`                    |


const arr = [10, 20, 30];   // length = 3

// Indexes:  0    1    2
//           |    |    |
//         arr[0] arr[1] arr[2]


Binary Search Example (Core Formula)
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // ✅ always safe
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

Why not just arr.length / 2?
  Because:
    - It doesn’t update in every iteration
    - It can cause off-by-one errors
    - Binary search needs range, not just length


Heap Example: Parent/Child Relationships
  Heap is usually stored as an array, using 0-based index:
  Index:   0   1   2   3   4
  Value:  10  20  15  30  40

  Parent of 30 (index 3) = Math.floor((3 - 1)/2) = 1 (value 20)
  Parent of 40 (index 4) = Math.floor((4 - 1)/2) = 1 (value 20)

*/ 