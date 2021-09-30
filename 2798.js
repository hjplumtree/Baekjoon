const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let fl = input.shift().split(' ')
let total = +fl[0]
let target = +fl[1]
let maybe = 0
let answer = 0

let cards = input[0].split(' ').map(Number)

for(let i = 0; i < total; i++) {
  for(let j = i + 1; j < total; j++) {
    for(let k = j + 1; k < total; k++) {
      if(cards[i] + cards[j] + cards[k] <= target) {
        maybe = cards[i] + cards[j] + cards[k]
        answer = Math.max(maybe, answer)
      }
    }
  }
}

console.log(answer);