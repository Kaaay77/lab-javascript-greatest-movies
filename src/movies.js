// The `movies` array from the file `src/data.js`.
const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((film)=>{
    return film.director
  });
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if(movies === 0){
    return 0;
  }
  const drama = movies.filter((film) =>{
    
   if (film.director === 'Steven Spielberg' && film.genre.includes('Drama')){
     return true
   }
   
  })
  
  return drama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
   if(!movies.length){
     return 0;
   }
  let total = movies.reduce((acc,elem) =>{
    if(elem.score){
      return acc + elem.score
    }else{
     return acc
    }
      
  },0)
  let avg = total / movies.length
  return Number(avg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let counter = 0;
  let total = movies.reduce((acc, elem) => {
    if (elem.genre.includes('Drama')) {
      counter++;
      return acc + elem.score;
    }
    return acc;
  }, 0);
  if (total === 0) {
    total = 0;
    return 0;
  } else {
    total = total / counter;
    return Number(total.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
 let newArr = JSON.parse(JSON.stringify(movies));

  let movisList = newArr.sort((first,second)=>{
    if(first.age > second.age){
      return 1
    }else{
      return -1
    }
  })
  
  return movisList
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    
 let newArr = JSON.parse(JSON.stringify(movies));

 let movList = newArr.sort((first,second) => {
    if (newArr.length <= 20){
      return 1
    }else{
      return -1
    }
 })
 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
