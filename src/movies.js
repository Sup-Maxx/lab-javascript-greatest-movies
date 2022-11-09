// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsList = moviesArray.map(movie => movie.director)
    return directorsList
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie) =>  movie.director == "Steven Spielberg" && movie.genre.includes("Drama"))
    return spielbergMovies.length
    
   // console.log(spielbergMovies)
   
    /*  for (let i=0; i < moviesArray.length; i++) {
        const spielbergMovies = []
        if (moviesArray.director === "Stephen Spielberg" && moviesArray.genre === "Drama")
        spielbergMovies.push(moviesArray[i])
        return spielbergMovies
    } */
    
    
    /* const spielbergMovies = moviesArray.filter(movie => movie.director("Steven Spielberg"))
    return spielbergMovies */
    
    
} // .filter()

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if (moviesArray.length == []) return 0

    const moviesWithScore = moviesArray.filter(
        movie => movie.score !== undefined
        //movie => movie.score
    )

    const total = moviesWithScore.reduce(function(totalScore, movie) {
        return totalScore + movie.score}, 0)
    const average = total / moviesArray.length // <-- should me moviesWithScore.length
        return +average.toFixed(2)
    
    /*
    let moviesWithScore = moviesArray
    // if (movie.score == 0 || null || undefined || "" )
    return moviesWithScore.splice(i,1)
    */ 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
// console.log(moviesArray)
    const dramaMovies = moviesArray.filter((movie) =>  movie.genre.includes("Drama"))
//console.log(dramaMovies)
if (dramaMovies.length == 0) return 0

    const dramaTotal = dramaMovies.reduce(function(totalScore, movie) {
        return totalScore + movie.score}, 0)
    const average = dramaTotal / dramaMovies.length 
    console.log(dramaMovies)
        return +average.toFixed(2)


    }
//    if (moviesArray.length == []) return 0

    
    //if (dramaMovies == []) return 0
   
    // .filter 
    // .reduce 
    // return average / moviesArray

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
