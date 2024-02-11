const mainDiv = document.getElementById('results');
const inp = document.getElementById('movie-name');
const btn = document.getElementById('btn');
btn.addEventListener('click', fetchData);

function fetchData() {
    const searchterm = inp.value;
    fetch(`https://www.omdbapi.com/?s=${searchterm}&apikey=1870b88e`)
        .then(function (res) { return res.json(); })
        .then(function (data) {
            console.log(data);
            displayData(data.Search)
            // if (data.Search) {
            //     displayData(data.Search);
            // } else {
            //     console.error('No results found');
            // }
        })
        .catch(function (err) { console.error(err); });
}

function displayData(movies) {
    movies.forEach(function (movie) {
        const div = document.createElement('div');
        div.classList.add('movie');
        const image = document.createElement('img');
        image.src = movie.Poster;
        image.alt = movie.Title;
        const title = document.createElement('h2');
        title.textContent = movie.Title;
        const year = document.createElement('p');
        year.textContent = movie.Year; // Corrected property name
        div.append(image, title, year);
        mainDiv.appendChild(div);
    });
}
