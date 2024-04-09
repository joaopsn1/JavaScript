var vetores = [8, 1, 5, 7, 6, 9]
vetores.sort()

/*
console.log(vetores[0])
console.log(vetores[1])
console.log(vetores[2])
console.log(vetores[3])
console.log(vetores[4])
console.log(vetores[5])
console.log(vetores[6])

for (var pos = 0; pos < vetores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}
*/

for (var pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}