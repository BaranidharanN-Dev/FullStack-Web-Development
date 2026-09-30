async function intialize (url = "https://pokeapi.co/api/v2/pokemon?limit=10" )
{
    const response = await axios.get(url)
    return response.data


}


async function start() {

    const data = await intialize()
    console.log(data)
    const pikachuname = data.results



    const body = document.body
    const newUL = document.createElement("ul")
    body.appendChild(newUL)

    for ( let result of pikachuname) {

        const imgdata = await intialize(result.url)
        console.log(imgdata)
        const pokisrc = imgdata.sprites.back_default


        const img = document.createElement("img")
        img.src = pokisrc

        const li = document.createElement("li")
        newUL.appendChild(li)
        const name = document.createElement("h3")

        li.appendChild(name)
        li.appendChild(img)

        name.textContent = result.name














    }




}

start()