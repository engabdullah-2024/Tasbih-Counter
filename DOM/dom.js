// let h1Element = document.getElementById("title")

// console.log(h1Element)



// let buttonElement = document.getElementsByTagName("button")[0]

// console.log(buttonElement)


// let pElement = document.getElementsByClassName("description") [0]
// console.log(pElement)


// let form = document.querySelector("form")


// console.log(form)


// let hi = document.querySelector("#title")


// hi.innerHTML = "This is JS"




let hello = document.querySelector("#hello")
hello.innerHTML = "Hi Good Morning"
hello.style.color="white"
hello.style.backgroundColor="blue"
hello.style.fontSize="90px"
hello.style.borderRadius= "12px"
hello.style.borderTopColor



let button = document.querySelector("#btn")
button.addEventListener("click", function(){
    document.body.style.backgroundColor="red"
})