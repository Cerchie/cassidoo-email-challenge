let a = ["C", "D", "E", "F", "G", "H"];
let b = [3, 0, 4, 1, 2, 5];

function reorder(arr1, arr2) {
  let newArr = [null, null, null, null, null, null];
  let count = 0;
  for (let j = 0; j < arr2.length; j++) {
    let newIdx = arr2[j];

    newArr.splice(newIdx, 1, arr1[count]);
    count++;
  }
  return newArr;
}

let reordered = reorder(a, b);
console.log(reordered);
// $ reorder(a, b) // a is now [D, F, G, C, E, H]
