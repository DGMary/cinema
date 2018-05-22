class MovieView {
    constructor (title, director, year, duration) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.duration = duration;
        this.el = null;
    }
    render (el) {
        var movie = document.createElement('div');
        movie.textContent = `Title: ${this.title} 
                             Year: ${this.year}`;
        this.el = el.appendChild(movie);
    }
    show () {
        if (this.el !== null) {
            this.el.style.display = 'block';
        }
    }
    hide () {
        if (this.el !== null) {
            this.el.style.display = 'none';
        }
    }
}
const addBtn = document.getElementById('add');
const movieBlock = document.getElementById('new-movie-block');
const confirmBtn = document.getElementById('confirm');
let inputField = document.getElementById('input');

addBtn.addEventListener("click" , function(){
    movieBlock.classList.toggle('is-open');
});

confirmBtn.addEventListener('click' , function(){
    if(inputField.value){

        let moviess = [];    
        moviess.push(new MovieView(inputField.value , "Director" , 2018  ));
       
        inputField.value = "";

        moviess.filter(function (movie, i) {    
            movie.render(movieList);
        })
    }
})


const movieList = document.getElementById('movie-list');
var movies = [];
function addNewMovie(data) {
    movies.push(new MovieView(data.title, data.director, data.year, data.duration));
}
fetch('data.json').then((data)=> data.json())
.then(function (result){
    
    result.forEach(function (item) {
        addNewMovie(item);
    })
    movies.forEach(function (movie, i) {
        movie.render(movieList);
    }) 
});


