//  arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan
// yerdə qalan elementlərin cəmini tapan function
let arr= [123,200,53,99,15]
let sum =0
let max_eded=arr[0]
let min_eded=arr[0]
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i]
    if(max_eded<arr[i]){
        max_eded=arr[i]

    }
    else if(min_eded>arr[i]){
        min_eded=arr[i]
    }

}
sum-=max_eded
sum-=min_eded

console.log("minimum ve maksimum ededler olmadan cem:"+ sum)