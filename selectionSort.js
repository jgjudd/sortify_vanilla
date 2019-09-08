function findSmallestElementOfArray(arr) {
  let smallest = arr[0];

  for (let item of arr) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
}

function selectionSort(arr) {
  let sortedArray = [];
  let smallest;
  let value;

  while (arr.length) {
    smallest = findSmallestElementOfArray(arr);
    value = arr.splice(arr.indexOf(smallest), 1).join();
    sortedArray.push(value);
  }
  return sortedArray;
}

let testArr = [4,8,1,4,9,2,7,3,6,5];
let testArr2 = [43,5,88,5454,994,333,1,7,9,4,1988, 212, 2121];

console.log(selectionSort(testArr));
