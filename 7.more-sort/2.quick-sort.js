// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
//   const arr = [5, 2, 1, 8, 4, 7, 6, 3];
//   console.log(quickSort(arr));

function quickSort(arr, left, right) {
    if (left >= right) return arr
    
    let index = partition(arr, left, right)
    quickSort(arr, left, index)
    quickSort(arr, index+1, right)

    return arr
  }
  
  function partition(arr, left, right) {
    const pivot = arr[left]
    const count = arr.filter(num => num < pivot).length;
    let temp = pivot
    arr[left] = arr[count]
    arr[count] = temp

    while(left < count) {
      if(arr[left] > pivot && arr[right] < pivot) {
        let tempVal = arr[left]
        arr[left] = arr[right]
        arr[right] = tempVal
        left++
        right--
      } else if(arr[left] > pivot && arr[right] > pivot) {
        right--
      } else if(arr[left] < pivot) {
        left++
      }
    }
    
    return count
  }
  
  // let arr = [5, 2, 1, 8, 4, 7, 6, 3]; 
  let arr = [10, 20, 100, 35, 4, 52, 87, 9, 7]; 
  console.log(quickSort(arr, 0, arr.length-1))