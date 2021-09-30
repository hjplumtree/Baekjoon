const fs = require('fs')
let input = fs.readFileSync('2751.txt').toString().split('\n')

let total = +input.shift()
let numbers = input.map(Number)
// let order = numbers.splice(0, 1)

// for(let i = 0; i < total - 1; i++) {
//   let temp = order.length
//   for(let j = 0; j < temp; j++) {
//     if(order[j] > numbers[i]) {
//       order = [...order.slice(0, j), numbers[i], ...order.slice(j)]
//       break;
//     }
//     if(j === temp - 1) {
//       order.push(numbers[i])
//     }
//   }
// }
numbers = numbers.sort((a, b) => a - b)
numbers.forEach(ele => console.log(ele))