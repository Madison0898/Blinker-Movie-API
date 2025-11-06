let movies;
const movieList = document.getElementById('movieList');
const searchBar = document.getElementById('searchBar')
let apiMovies = [];
console.log(searchBar)

searchBar.addEventListener('keyup', (event) => {
const searchString = (event.target.value);
const filteredMovies = apiMovies.filter((movie) => {
  return (
    movie.Poster.includes(searchString) || 
    movie.Title.includes(searchString)
  );
});
console.log(filteredMovies);
});



async function loadMovies() {
  try {
  const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8f85573e&s=love');
  const data = await response.json();
  console.log(data.Search);
return data.Search}
catch (err) {
  console.error(err);}
}

loadMovies();


const displayMovies = (movie) => {
  const htmlString = movie
  .map((movie) => {
    return `<div class="movie">
<figure class="movie__img--wrapper">
    <img class="movie__img" src="${movie.Poster}" alt="">
</figure>
<div class="movie__title">
${movie.Title}
</div>
<div class="movie__tag">
    ID: "${movie.imdbID}"
</div>
<div class="movie__year">
    <span class="movie__year--normal">${movie.Year}</span> 
</div>
</div>`;
})
.join('');
movieList.innerHTML = htmlString;
}

//document.addEventListener('DOMContentLoaded', () => {
   // const searchBox = document.getElementById('searchBox');
    //const resultsList = document.getElementById('results');
    ///const listItems = resultsList.getElementsByTagName('li');

  
    //searchBox.addEventListener('input', function(event) {
      //  const query = event.target.value.trim().toLowerCase();
        
        //for (let i = 0; i < listItems.length; i++) {
          //  const item = listItems[i];
            //const text = item.textContent.toLowerCase();
            
            //if (text.includes(query)) {
              //  item.style.display = ''; 
            //} 
           // else {
            //    item.style.display = 'none';
            //}
        //}
   // });
//});



async function renderMovies(filter) {
    const moviesWrapper = document.querySelector('.movies');
     
  moviesWrapper.classList += ' movies__loading'

    if (!movies) {
        movies = await getmovies();
    }
    
    moviesWrapper.classList.remove('movies__loading')

    if (filter === 'LOW_TO_HIGH') {
      movies.sort((a, b) => a.Year - b.Year);
    }
    else if (filter === 'HIGH_TO_LOW'){
        movies.sort((a, b) => b.Year - a.Year);
    }
    else if (filter === 'ImdbID') {
        movies.sort((a, b) => b.imdbID -  a.imdbID);
    }

function showMoviePoster(Poster) {
    console.log(window.location);
    renderMovies();
    //window.location.href = `${window.location.Poster}/movie.html`
}


   const moviesHtml = movies.map((movie) => {
return `<div class="movie">
<figure class="movie__img--wrapper">
    <img class="movie__img" src="${movie.Poster}" alt="">
</figure>
<div class="movie__title">
${movie.Title}
</div>
<div class="movie__tag">
    ID: "${movie.imdbID}"
</div>
<div class="movie__year">
    <span class="movie__year--normal">${movie.Year}</span> 
</div>
</div>`;
})
.join("");

moviesWrapper.innerHTML = moviesHtml
}



function filterMovies(event) {
 renderMovies(event.target.value)
}

setTimeout(() => {
    renderMovies();    
});


//FAKE DATA
function getmovies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
 {
      "Title": "Crazy, Stupid, Love.",
      "Year": "2011",
      "imdbID": "tt1570728",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Love Actually",
      "Year": "2003",
      "imdbID": "tt0314331",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWRlZjcwYTgtYWJkOS00MGYwLTk3Y2ItNmU4NTg5Nzg2YTQ2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      "Year": "1964",
      "imdbID": "tt0057012",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjFjYzBlOTktMTI2OS00ZWVhLTgxMDUtNzAwODY2NmI3YTAzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Thor: Love and Thunder",
      "Year": "2022",
      "imdbID": "tt10648342",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Love & Other Drugs",
      "Year": "2010",
      "imdbID": "tt0758752",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Shakespeare in Love",
      "Year": "1998",
      "imdbID": "tt0138097",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmM3MTllNzYtN2MzNS00NWQwLTk0NTEtNjY1MmMwYjNkNTE5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "P.S. I Love You",
      "Year": "2007",
      "imdbID": "tt0431308",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Love, Death & Robots",
      "Year": "2019–",
      "imdbID": "tt9561862",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDY3OTZiYzktN2U5My00MzRhLWJiZjItZjNlZmM3OGViZmFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "I Love You, Man",
      "Year": "2009",
      "imdbID": "tt1155056",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"
    },
    {
      "Title": "Punch-Drunk Love",
      "Year": "2002",
      "imdbID": "tt0272338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTYyMTQ2MDAtMzYzYS00YjZiLWJiNDUtZjEwNzM4YzE1ZDhhXkEyXkFqcGc@._V1_SX300.jpg"
    }
  ]);
   }, 1000);
    });
}







