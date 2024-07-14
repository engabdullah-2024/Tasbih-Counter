// Arrays  : The main part of JS







// let friends = ["Ibrahim","Ali" , "Abdi" , "Muna", "Adam" , 40]
// //               0        1        2       3      4            =index numbers


// // loop
// // let num = 0
// // while(num < friends.length){
// //     document.write(friends[num], "<br>")
// //     num++
// // }




// //  updated method
// // friends[0] = "Geedi"




// // document.write(friends [0])





// // Array Methods


// //  join method

// friends.push("Geedi" , "Kasim" , "Awale")


// // add new element

// friends.push("Geedi")
// //  deleting last element
// friends.pop()

// // deleting first element

// friends.shift()
// //  deleting element for the first
// friends.unshift("Zaynab" , "Dad")
// // sort
// friends.sort()

// // reverse
// friends.reverse(



// )
// // splice   insert or delet
// friends.splice(1, 2, "Alasow" , "Ayan")





//  join
// let iskudar = friends.join("/")

// document.write(iskudar)

//  fo each

// friends.forEach((name)  => { {
//     document.write(name, "<br>")
// }
    
// })

// filter

// let ages = [5, 7, 10, 13, 15, 16, 17, 18, 28, 30]
// let newAge = ages.filter((item) => {
//     return item >= 15
// } )

// document.write(newAge)

// // let names = ["Man" , "woman" , "Boy" , "Girl"]


// // document.write( names [3])


// Classwor
// let names = ["Ali", "Geedi" , "Amina"]
// let newNames = names.filter((name ) =>{
//     return name == "Ali"

// } )
// document.write(newNames)


// map 
let ages = [20 , 30, 40, 50]
ages.map((age) => {
    document.write(age , "<br>")
})