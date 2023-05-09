#include <stdio.h>

void main() {
  int Array[10]; // Declare an array of 10 integers.
  int a, b, total; // Declare three integers.

  // Prompt the user to enter 10 integers.
  for (a = 0; a < 10; a++) {
  printf("Please enter 10 integers: ");
    scanf("%d", &Array[a]);
  }

  // Sort the array in descending order using the bubble sort algorithm.
  for (a = 0; a < 10; a++) {
    for (b = 0; b < 10 - a - 1; b++) {
      if (Array[b] > Array[b + 1]) {
        total = Array[b];
        Array[b] = Array[b + 1];
        Array[b + 1] = total;
      }
    }
  }

  // Print the sorted array.
  printf("The sorted array is: ");
  for (a = 0; a < 10; a++) {
    printf("%d ", Array[a]);
  }
  printf("\n");

  return 0;
}


