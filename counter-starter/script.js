function add(numberToadd) {
    // Get DOM Element
    let counter = document.getElementById('number')

    // counter.innerHtml = "0"
    // add 1 to the current value
    let newValue = parseInt(counter.innerHTML) + numberToadd

    //reassign the value to the DOM element
    counter.innerHTML = newValue

    console.log("yes we work: ", newValue)
}

function minus(numberTominus) {
    // Get DOM Element
    let counter = document.getElementById('number')

    // counter.innerHtml = "0"
    // add 1 to the current value
    let newValue = parseInt(counter.innerHTML) - numberTominus

    //reassign the value to the DOM element
    counter.innerHTML = newValue
    
    console.log("yes we work: ", newValue)
}

function multiply(numberToMultiply) {
    // Get DOM Element
    let counter = document.getElementById('number')

    // counter.innerHtml = "0"
    // add 1 to the current value
    let newValue = parseInt(counter.innerHTML) * numberToMultiply

    //reassign the value to the DOM element
    counter.innerHTML = newValue
    
    console.log("yes we work: ", newValue)
}

function divide(numberTodivide) {
    // Get DOM Element
    let counter = document.getElementById('number')

    // counter.innerHtml = "0"
    // add 1 to the current value
    let newValue = parseInt(counter.innerHTML) / numberTodivide

    //reassign the value to the DOM element
    counter.innerHTML = newValue
    
    console.log("yes we work: ", newValue)
}
