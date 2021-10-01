const fs = require('fs')
let input = fs.readFileSync('2751.txt').toString().split('\n')

let [N, ...order] = input.map(Number)
order = mergeSort(order)
function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = []

    let l_index = 0
    let r_index = 0

    while (l_index < left.length && r_index < right.length){
        if(left[l_index] < right[r_index]){
            result.push(left[l_index])
            l_index++
        }
        else {
            result.push(right[r_index])
            r_index++
        }
    }
    return [...result, ...left.slice(l_index), ...right.slice(r_index)]
}

console.log(order.join('\n'))