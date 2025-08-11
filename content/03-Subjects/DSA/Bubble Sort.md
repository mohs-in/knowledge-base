---
tags:
  - sorting-algorithm
  - big-o-n-square-time
  - big-o-1-space
---

## Idea

In each iteration the bigger element moves to the end of the array.

## Analogy

You compare two adjacent books, if you find larger one you move to the right and at the end book is in it's correct position

## Dry Run

![[Bubble Sort Dry Run.png]]

## Code

```Java
bubbleSort(int [] arr) {
	int n = arr.length;
	for(int i = 0; i <= n-2; i++) {
		for(int j = 0; j <= n-2-i; j++) {
			if(arr[j] > arr[j+1]) {
				int temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
}
```

[Bubble Sort Code Link GitHub](https://github.com/mohs-in/problem-solving/blob/main/sorting/BubbleSort.java)

## Analysis

Time Complexity: $O(n^2)$ |
Space Complexity: $O(1)$
