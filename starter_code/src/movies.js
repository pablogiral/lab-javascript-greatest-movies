/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let avg = movies.reduce((ac, cu) => ac + +cu.rate, 0) / movies.length;

  return parseFloat(avg.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let getDrama = movies.filter(movie => movie.genre.indexOf("Drama") >= 0);

  if (getDrama == []) {
    return 0;
  } else {
    return getDrama.length == 0 ? 0 : ratesAverage(getDrama);
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  let movieTime = movies.sort((a, b) => {
    if (a.duration > b.duration) {return 1};
    if (a.duration < b.duration) {return -1};
    if (a.duration == b.duration) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    }
    // return a.title.localeCompare(b.title)
  });
  return movieTime;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let spielbergMovies = movies.filter(
    movie =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return spielbergMovies.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let alphaOrder = movies.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  newAlphaOrder = alphaOrder.map(item => item.title);
  return newAlphaOrder.slice(0, 20);

}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let timeArray = movies.duration.split("");

  if (timeArray[0].length <= 3) {
    let isHours = parseInt(timeArray[0].replace("h", ""));

    return isHours * 60;
  } else if (timeArray[0].length > 3) {
    let isMinutes = parseInt(timeArray[0].replace("min", ""));
    return isMinutes;
  }
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(){

}

