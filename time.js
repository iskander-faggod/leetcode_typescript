//Константая сложность  O(1)
var arr = [1, 2, 3, 4, 5];
console.log(arr);
function someFunc() {
}
//Линейная сложность O(N)
var someSum = 0;
arr.forEach(function (elem) { return someSum += elem; });
console.log(someSum);
//Квадратичная сложность O(N^2)
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; arr.length; j++) {
//     }
// }
// Сложность O(A+B)
var arrAB = [[1, 2], [3, 4]];
var sumArr = 0;
// for (let i = 0; i < arrAB.length; i++) {
//     for (let j = 0; arrAB.length; j++) {
//         // @ts-ignore
//         sumArr += arrAB[i][j]
//     }
// }
arrAB.forEach(function (elem) {
    elem.forEach(function (i) { return console.log(i); });
});
console.log(sumArr);
//# sourceMappingURL=time.js.map