const checkStatusAndParse = (response)=> {
     if(!response.ok) {
    throw new Error ( `Someting went wrong ${response.status}`) }
    else { return response.json() }
}

const printData =  (data)=> {


    for ( result of data.results) {
        console.log(result.name)
        console.log(result.url)
    }
return Promise.resolve(data.next)  }

const fetchNextPage = (url) => {
    console.log( ` This is next ${url}`)
    return fetch(url)
}

fetch("https://pokeapi.co/api/v2/pokemon?limit=5")


.then (checkStatusAndParse)
.then (printData)
.then(fetchNextPage)

.then (checkStatusAndParse)
.then(printData)
.then(fetchNextPage)

.then (checkStatusAndParse)
.then (printData)
.then(fetchNextPage)


.then (checkStatusAndParse)
.then (printData)
.then(fetchNextPage)

.then (checkStatusAndParse)
.then(printData)
.then(fetchNextPage)

.then (checkStatusAndParse)
.then (printData)
.then(fetchNextPage)





.catch ( (err)=> {
    console.log("Opps you have a problem")
    console.log(err)
})