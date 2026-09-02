let count = 0  
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment () {
   count += 1;
    
    countEl.innerHTML = count
}

function save() {
   let save = count + "-"
   
   saveEl.innerHTML += save
  
   countEl.innerHTML = 0
   count = 0
    
}