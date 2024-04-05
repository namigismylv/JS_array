// .Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.
let arr = [2, 4, 6, 7, 10, 12, 58, 9];
let max_eded = arr[0]; 
let counter=0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 && max_eded < arr[i]) {
        max_eded = arr[i];
        counter++
    }
}

if (counter>=1) { 
    console.log("Ən böyük tək ədəd: " + max_eded);
} else {
    console.log("Tək ədəd yoxdur");
}
