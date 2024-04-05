let eded=parseInt(prompt("Ədədi daxil edin"))
let result=1;

if(eded<0){
    alert("Mənfi ədədlərin faktorialı hesablana bilməz!")
}
else{

    for (let index = 1; index <= eded; index++) {
    result*=index
    
    }
    alert(result);

}