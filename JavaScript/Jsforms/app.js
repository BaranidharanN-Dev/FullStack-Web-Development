const form = document.querySelector("#signup-form")
const ccEl = document.querySelector("#cc")
const checkEl = document.querySelector("#terms")
const vegEl = document.querySelector("#veg")



// ccEl.addEventListener("input", function(e) {
    
//     formdata['cc'] = e.target.value
//      console.log(formdata)  
// })

// checkEl.addEventListener("input",function(e){
//     formdata["terms"] = e.target.checked
//     console.log(formdata)
// })

// vegEl.addEventListener("input", (e)=>  { 
//     formdata["vegge"] = e.target.value
// console.log(formdata)} 

// )

form.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        e.preventDefault()
    }
})

const formdata = {}



for(let input of [ccEl, checkEl, vegEl ]) {

    input.addEventListener("change", function(e) {
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value
        const checked = e.target.checked

        if(type === "checkbox" ) {
            formdata[name] = checked 
        } else {
            formdata[name] = value
        }
        
        console.log(formdata)
    })
}


