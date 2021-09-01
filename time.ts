//Константая сложность  O(1)

const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr)

function someFunc() {

}


//Линейная сложность O(N)
let someSum: number = 0;
arr.forEach(elem => someSum += elem)
console.log(someSum)


//Квадратичная сложность O(N^2)
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; arr.length; j++) {
//     }
// }

// Сложность O(A+B)
const arrAB = [[1, 2], [3, 4]];
let sumArr = 0;

// for (let i = 0; i < arrAB.length; i++) {
//     for (let j = 0; arrAB.length; j++) {
//         // @ts-ignore
//         sumArr += arrAB[i][j]
//     }
// }

arrAB.forEach(elem => {
    elem.forEach(i => console.log(i))
})
console.log(sumArr)