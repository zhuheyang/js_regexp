// change '1234567' to '1,234,567'
// transverse string to array, push ',' in the array every three number
// transverse the String Array, and make the Array to String(use join method)
const str = '1234567'
let arr = str.split('').reverse()

// wrong method
function changeMoney(arr) {
  let j = 0
  let newArr = []
  for(let i = 0; i < arr.length; i++, j++) {
    if(j == 3) {
      newArr[i] = ',' + arr[i]
      j = 0
    } else {
      newArr[i] = arr[i]
    }
  }
  return newArr
}

// which didn't work!
console.log(changeMoney(arr)) // [ '7', '6', '5', ',4', '3', '2', ',1' ]
console.log(changeMoney(arr).reverse().join(''));  // ,123,4567
// or you can first join them, then reverse it, which fits
console.log(changeMoney(arr).join('').split('').reverse().join('')); // 1,234,567

function changeMoney2(arr) {
  let j = 0
  let newArr = []
  for(let i = 0; i < arr.length; i++, j++) {
    if(j == 3) {
      // 由于还会有一次的数组反转, 此处的','应放置在数字后面
      newArr[i] = arr[i] + ','
      j = 0
    } else {
      newArr[i] = arr[i]
    }
  }
  return newArr
}
console.log(changeMoney2(arr));  // [ '7', '6', '5', '4,', '3', '2', '1,' ]
console.log(changeMoney2(arr).reverse().join(''));  // 1,234,567
