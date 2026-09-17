const inputEl = document.getElementById("taskinput")
const addtaskEl = document.getElementById("add-btn")
const listEl = document.getElementById("todo")
const delEl = document.getElementById("del-btn")

let tasks = [] 

addtaskEl.addEventListener("click", (x) => { 

    x.preventDefault()

    const task = inputEl.value 

 
   if ( task === "") {
    alert("Oops! No Todo's now!")
    return
   }


     tasks.push(task) 

    const dblocal =  localStorage.setItem("taskkey", JSON.stringify(tasks))
    const dblocalout = JSON.parse(localStorage.getItem("taskkey"))
  
     
    for ( let x of dblocalout) { 

          const li = document.createElement("li")

        li.textContent = x

        listEl.appendChild(li)
    
    }

    inputEl.value = ""

  
 })

 delEl.addEventListener("click", del => { 

    tasks = [ ]

 })



