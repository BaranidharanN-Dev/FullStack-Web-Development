// const colors = [
//   "#FF6B6B",
//   "#FFD93D",
//   "#6BCB77",
//   "#4D96FF",
//   "#9B5DE5",
//   "#F15BB5",
//   "#00BBF9",
//   "#00F5D4"
// ]; 

// const container = document.querySelector(".container")
// const colortext = document.createElement("h1")
// colortext.innerText = "Pick a Color"
// container.appendChild(colortext)
// colortext.setAttribute("class","h1")
// colortext.style.color = "white"



// const changecolor = function() {
//     colortext.style.backgroundColor = this.style.backgroundColor
    
// }


// for ( let color of colors) {
//    const box =  document.createElement("div")
//    box.style.backgroundColor = color
//    box.classList.add("box")
//    box.addEventListener("click" , changecolor)

//    container.appendChild(box)
// }


// document.body.addEventListener("keypress", function(HELLO) {
//     console.log(HELLO)
// })

// const username = document.querySelector("#username")

// username.addEventListener("keydown", function() {
//     console.log("Key down")
// })
// username.addEventListener("keypress", function(x) {
//     console.log(x.key)
// })


// username.addEventListener("keyup", function() {
//     console.log("Key up")
// })

const inputEl = document.querySelector("#foodlist") 
const ul = document.createElement("ul")
const foodbox = document.querySelector(".foodbox")


foodbox.insertAdjacentElement("beforeend",ul)

inputEl.addEventListener("keypress", function(x) {
   if(x.key === "Enter") {
    if(!this.value) return
    const inputdata = this.value
    const li = document.createElement("li")
    li.innerText = inputdata
    ul.appendChild(li)
    inputEl.value = ""
   }
})
