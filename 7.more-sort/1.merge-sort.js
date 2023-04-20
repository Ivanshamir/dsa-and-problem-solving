let arr = [20, 5, 40, 60, 10, 1]; 

function mergeList(arr) {
	if(arr.length <= 1) return arr
  
	const mid = Math.floor(arr.length / 2)
    let left = mergeList(arr.slice(0, mid)); 
	let right = mergeList(arr.slice(mid)); 
  
  return merge(left, right)
}

function merge(leftArr, rightArr) {
	let leftArrLen = leftArr.length
  let rightArrLen = rightArr.length
  let leftStart = 0
  let rightStart = 0
  
  let newArr = []
  
  while(leftStart < leftArrLen && rightStart < rightArrLen) {
  	if (leftArr[leftStart] < rightArr[rightStart]) {
     	newArr.push(leftArr[leftStart])
     	leftStart++
    } else {
    	newArr.push(rightArr[rightStart])
     	rightStart++
    }
  }
  
  if(leftStart < leftArrLen) {
  	newArr = [...newArr, ...leftArr.slice(leftStart)]
  } else if(rightStart < rightArrLen) {
  	newArr = [...newArr, ...rightArr.slice(rightStart)]
  }
  
  return newArr
}
console.log(mergeList(arr))
