function pick (arr) { 

   const randomnum =  Math.floor(Math.random()*arr.length)

   return arr[randomnum]


}

function getCard() { 
const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']

const suits = ['clubs','spades','hearts','diamonds']

return { value: pick(values),
         suit: pick(suits)} }

console.log(getCard())
console.log(getCard())
console.log(getCard())
console.log(getCard())
console.log(getCard())
console.log(getCard())