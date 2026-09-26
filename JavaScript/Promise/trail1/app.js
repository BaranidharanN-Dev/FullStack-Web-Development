function fact () { 

    return  new Promise ( (resolve,reject)=> {
   const random = Math.random() 
        setTimeout(() => {

            if ( random < 0.5) {
    resolve()
   } else { 
    reject ()
   }
            
        }, 5000);
   
}) 

}


fact()
.then (()=> {
    console.log("I love you")
}).catch( ()=> {
    console.log("I like you")
})

