function binarySearch(array, target) {
      // Check if the array is empty
      if (array.length === 0) {
        return -1;
      }
    
      // Initialize the start and end indices
      let start = 0;
      let end = array.length - 1;
    
      // Loop until the start index is greater than the end index
      while (start <= end) {
        // Find the middle index
        let mid = Math.floor((start + end) / 2);
    
        // Compare the middle element with the target
        if (array[mid] === target) {
          // Return the index of the target element
          return mid;
        } else if (array[mid] < target) {
          // Set the start index to the middle index + 1
          start = mid + 1;
        } else {
          // Set the end index to the middle index - 1
          end = mid - 1;
        }
      }
    
      // Return -1 if the target element is not found
      return -1;
    }
    
    const array = [1, 3, 5, 7, 9];
    const target = 7;
    const target1=5;
    const index = binarySearch(array, target);
    const index1 = binarySearch(array, target1);

    
    console.log(index); // 2
    console.log(index1);