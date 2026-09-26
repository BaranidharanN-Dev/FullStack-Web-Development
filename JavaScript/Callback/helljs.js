// function first(callback) {
//   setTimeout(() => {

//       console.log("I am first")
//       callback()

//   }, 2000);

// }

// function second(callback) {
//   setTimeout(() => {

//       console.log("I am second")
//       callback()

//   }, 5000);

// }
// function third(callback) {
//   setTimeout(() => {

//       console.log("I am third")
//       callback()

//   }, 3000);

// }
// function fourth(callback) {
//   setTimeout(() => {

//       console.log("I am fourth")
//       callback()

//   }, 2000);

// }
// function fifth(callback) {
//   setTimeout(() => {

//       console.log("I am fifth")
//       callback()

//   }, 500);

// }


// first(()=> {
//     second (()=>{
//         third(()=>{
//             fourth(()=>{
//                 fifth( ()=> {
//                     console.log("All Task Completed!")
//                 })

//             })
//         })
//     })
// })

// function sum ( a,b) {
//     const result = a + b
//     return result
// }

// console.log(sum(10,20))

// const sum2 = (a,b) => {
//     return a + b
// }

// // console.log(sum2(10,40))

// let add = (a, b) => a + b


// const isPositive = number => number>=0

// console.log(isPositive(add(10,20)))


// const randomnumber = () => Math.random()

// console.log(randomnumber())


let p = new Promise ( (resolve,reject)=> {

    let a = 1 + 0
    if ( a === 2) {
        resolve('success')
    } else {
        reject('failed')
    }

})

p.then((sucess)=> console.log(`Yes ${sucess}`))
.catch((failed)=> console.log( `Oops ${failed}`))