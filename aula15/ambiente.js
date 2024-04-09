var num = [5, 4, 8]
num[3] = 6
num.push(7)
num.length
num.sort()


console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}