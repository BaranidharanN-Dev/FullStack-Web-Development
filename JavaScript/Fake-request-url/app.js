const fakeRequest = (url) => {
    return new Promise ( (resolve, reject)=> {
        setTimeout(() => { 

            
                const pages = { 
                    '/user': [ { id:1 , username:"barani"},
                            
                               {id:2, username:"vanilaJs"}   ],

                    '/about' : 'This is about page'

                  } 

                  const data = pages[url]
                resolve({ status:200, data})
            }
            
        , 1000); 


    })

    
}

fakeRequest('/user') 
    .then ( (res)=>{
       console.log("Status Code", res.status)
       console.log("Data", res.data)
    }).catch( (res)=> {
        console.log(res.status)
        console.log("REQUEST FAILED")
    })