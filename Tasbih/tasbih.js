let tasbih = document.querySelector("#tasbih")

let incurement = document.querySelector("#incurementBtn")

let reset = document.querySelector("#resetBtn")

let initialValue = 0



incurement.addEventListener("click", function(){

    initialValue++
    tasbih.innerHTML = initialValue
   if(initialValue==4) {
document.body.style.backgroundColor="red"
}
   else if(initialValue==5){
   document.body.style.backgroundColor="blue"
   }

 else  if(initialValue==6) {

 
   document.body.style.backgroundColor="green"
 }

   else{
    document.body.style.backgroundColor=""
}  
   
 
})
reset.addEventListener("click", function(){
    initialValue = 0
    tasbih.innerHTML = initialValue
})




