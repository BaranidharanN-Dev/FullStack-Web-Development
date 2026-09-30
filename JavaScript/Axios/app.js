const print = (resovle) => {
    console.log("New Page Loaded")
    const output = resovle.data.results
    for ( result of output) {
        console.log(result.name)
    }

    return resovle.data.next
}

const newPage = (resovle) => {
    return axios.get(resovle)
}
axios.get("https://pokeapi.co/api/v2/pokemon?limit=5")

.then(print)

.then(newPage)
.then(print)
.then(newPage)
.then(print)
.then(newPage)
.then(print)
.then(newPage)
.then(print)