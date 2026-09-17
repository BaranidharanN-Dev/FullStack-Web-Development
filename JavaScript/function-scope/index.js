const movies = [
  { title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.7 },
  { title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
  { title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
  { title: "Titanic", genre: "Romance", year: 1997, rating: 7.9 },
  { title: "Avatar", genre: "Sci-Fi", year: 2009, rating: 7.8 },
  { title: "The Matrix", genre: "Action", year: 1999, rating: 8.7 },
  { title: "Jurassic Park", genre: "Adventure", year: 1993, rating: 8.2 },
  { title: "Gladiator", genre: "Action", year: 2000, rating: 8.5 },
  { title: "The Avengers", genre: "Action", year: 2012, rating: 8.0 },
  { title: "Toy Story", genre: "Animation", year: 1995, rating: 8.3 }
];


// // find intersteller movie 

// const intermovie = movies.find(x => (x.title.includes("Inter")))
// console.log(intermovie.title) 


// find the movie rating above 8.8 

// const rating = movies.filter(x => (x.rating > 6)) 

// const tittle = rating.map( x => (x.title) )

// console.log(tittle)


// const arrayeven = [22,44,55,66, 88 , 99]

// const even = arrayeven.filter( x => ( x < 50 ))

// console.log(even)

const word = ["dog","dig","dil","del","dvl"]

 const lastg = word.some(word => { let lastidx = word.length -1 
  return word[lastidx] === "k"
})


console.log(lastg)