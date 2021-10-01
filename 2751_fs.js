const fs = require('fs')
let input = fs.readFileSync('2751.txt').toString().trim().split('\n')

let [N, ...order] = input.map(Number)

order = order.sort((a, b) => (a - b))
console.log(order.join('\n'));