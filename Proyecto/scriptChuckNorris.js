// let h2 = document.querySelector('h2')
// let update = document.querySelector('button')

// $.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
//     h2.textContent = data.value
// })

// update.addEventListener('click', function (){
//     $.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
//     h2.textContent = data.value
// })
// })



let h2 = document.querySelector('h2')
let update = document.querySelector('button')

function jokes() {
    $.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
        h2.textContent = data.value
    })
}
jokes()
update.addEventListener('click', jokes)