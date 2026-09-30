

// // // const firstReq = new XMLHttpRequest();

// // // firstReq.addEventListener("load", ()=> { console.log("IT IS WORK");
// // //     const users = JSON.parse(firstReq.responseText)
// // //     users.forEach((user) => {
// // //     console.log(user.name);
// // // });

// // // })

// // // firstReq.addEventListener("error", ()=> {console.log("IT IS NOT WORKED")})

// // // firstReq.open("GET", "https://jsonplaceholder.typicode.com/users")

// // // firstReq.send()





// // const newReq = new XMLHttpRequest();

// // newReq.addEventListener("load", ()=> {

// //     console.log("IT IS WORK")
// //     const outdata = JSON.parse(newReq.responseText)
// //     for ( const users of outdata) {
// //         const usernames = users.username
// //         const websites = users.website
// //         console.log(usernames)
// //         console.log(websites)
// //     }




// // })

// // newReq.addEventListener("error", ()=> { console.log("IT IS NOT WORK")})

// // newReq.open("GET",  "https://jsonplaceholder.typicode.com/users")
// // newReq.send()

// // const fetreq =  fetch("khjgfgfflhh;")
// // .then ( ( response)=> {
// //         if(!response.ok) {
// //             throw new Error(  `Something went wrong ${response.status}`)
// //         } else {   response.json()
// //     .then((data) => {
// //         for ( let usernames of data ) {
// //         console.log(usernames.username )}
// // })}
// //    })

// // .catch ( (err)=> {
// //     console.log("We Found Error")
// //     console.log(err)
// // })


// const catapi = fetch ( "https://catfact.ninja/breeds?limit=3")

// .then ( ( response) => {
//     if(!response.ok) {
//         throw new Error ( `someting went wrong ${response.status}`)
//     } else {
//         return response.json()
//     }
// })

// .then ( (datass)=> {
//    const catpage= datass.links[1].url
//    return fetch(catpage)
// })

// .then ( ( response) => {
//     if(!response.ok) {
//         throw new Error ( `someting went wrong ${response.status}`)
//     } else {
//         return response.json()
//     }
// })


// .then ( ( data1)=> {

//     console.log(data1)
//        const pages = data1.links

//      let page1 = pages[1].url
//      let page2 = pages[2].url
//      let page3 = pages[3].url
//      let page4 = pages[4].url

//      console.log(page1)
//      console.log(page2)
//      console.log(page3)
//      console.log(page4)


//      fetch ( page1 )
//      .then ( (response)=> {
//         if(!response.ok) {
//             throw new Error (`something went wrong ${response.status}`)
//         } else {
//             return response.json()
//         }
//      })

//      .then ((datafile)=> { console.log(datafile)})
//      fetch ( page2 )
//      .then ( (response)=> {
//         if(!response.ok) {
//             throw new Error (`something went wrong ${response.status}`)
//         } else {
//             return response.json()
//         }
//      })
//       .then ((datafile)=> { console.log(datafile)})
//      fetch ( page3 )
//      .then ( (response)=> {
//         if(!response.ok) {
//             throw new Error (`something went wrong ${response.status}`)
//         } else {
//             return response.json()
//         }
//      })
//       .then ((datafile)=> { console.log(datafile)})
//      fetch ( page4 )
//      .then ( (response)=> {
//         if(!response.ok) {
//             throw new Error (`something went wrong ${response.status}`)
//         } else {
//             return response.json()
//         }
//      })
//      .then ((datafile)=> { console.log(datafile)})

//     })
