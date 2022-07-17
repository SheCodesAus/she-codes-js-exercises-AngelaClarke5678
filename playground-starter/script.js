// function showName() {
//    let inputField = document.getElementById('name-text') 
//    console.log("The input field is: ", inputField)
//    alert("hello " + inputField.value)
// //    alert("Hello Jenna")

//     // console.dir(inputField) a way to print list of shit
// }

// /// Array 
// for (let count = 0; count <10; count++) {
//     console.log("found count: ", count)
// }

// // let pets = ["Chilli", "Rex", "Roary", "Fleur"];
// // console.log(pets)
// // pets.pop() // removed from array
// // pets.push("Bella") // added to array
// // console.log(pets)

// loops

let pets = ["Chilli", "Rex", "Roary", "Fleur", "Bella"];

// for (let index = 0; index < pets.length; index++) {
//     console.log("Found pet: ", pets[index]) // an index is a reference point to a list for where data sits  
// }
pets.forEach((pet) => {
    if (pet == 'Bella') {
    console.log("OMG Bella is the Best dog")
    } else if (pet == 'Chilli') {
        console.log("you're pretty good Chill")
    }
    else {
    console.log("Eh, plebs")
    }
}) 

