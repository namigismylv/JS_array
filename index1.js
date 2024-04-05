// 2.Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.
// Numunə
// Let arr = [2,4,6,7,10,12,58,9]
// bu araydəyi ən böyük ədəd 58 və ən kicik ədəd 2 yerlərin dəyişiblər.
// Let newArr=[58,4,6,7,10,12,2,9]
// Bele olsun.
let arr = [2, 4, 6, 7, 10, 12, 58, 9]
let maxIndex = 0;
let maxNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
        maxIndex = i;
    }
}
let minIndex = 0;
let minNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
        minNumber = arr[i];
        minIndex = i;
    }
}
let temp = arr[maxIndex];
arr[maxIndex] = arr[minIndex];
arr[minIndex] = temp;
console.log(arr); 
