const btnSearch = document.querySelector("#btn-search")
const inputEl = document.querySelector("#input")
const resultEl = document.querySelector("#result")

btnSearch.addEventListener("click", ()=> {

  const pokiname = inputEl.value

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokiname}`)

  .then((response)=>{

    const pokimon = response.data
    console.log(response.data)

    resultEl.innerHTML =
    `<h1>${pokimon.name}</h1>
     <img src=${pokimon.sprites.back_default} />
     <p>${pokimon.height} cm</p>
     <p>${pokimon.weight} kg</p>

    `





  })

  .catch( (err)=> {
    resultEl.textContent = "Pokemon Not found!"
  })

})