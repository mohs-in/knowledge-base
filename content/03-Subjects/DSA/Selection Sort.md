---
tags:
  - big-o-1-space
  - big-o-n-square-time
  - sorting-algorithm
---

## Idea

Select the minimum element and keep it start of the array.

## Analogy

You scan the complete shelf of books once, pick the smallest and put it in the first, second time you completely scan again except the book already placed, pick the small the smallest and put it in the first, and you repeat this until every book is sorted.

## Code

```Java
selectionSort(int [] arr) {
	int n = arr.length;
	for(int i = 0; i <= n-2; i++) {
		int minIndex = i;
		for(int j = i+1; j <= n-1; j++) {
			if(arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		int temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
}
```

## Example

![[Selection Sort Dry Run.png]]

[Selection Sort Code Link GitHub](https://github.com/mohs-in/problem-solving/blob/main/sorting/SelectionSort.java)

## Analysis

Time Complexity: $O(n^2)$ |
Space Complexity: $O(1)$
