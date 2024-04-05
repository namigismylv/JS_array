let arr= [123,7,53,99]
max_eded=arr[0]
min_eded=arr[0]
let average;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max_eded){
        max_eded=arr[i]
    }
    else if(arr[i]<min_eded)
    min_eded=arr[i]
}
average=(max_eded+min_eded)/2
console.log(average);
