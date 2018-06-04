class View {
    constructor(options/*el, model, className, tagName*/) {
        let tag = options.tagName || 'div';
        if (options.el) {
            this.el = options.el;
        } else {
            this.el = document.createElement(tag);
        }
        this.model = options.model;

        if (options.className) {
            this.className = options.className;
            this.el.classList.add(this.className);
        }   
    }
}

class MovieListView extends View {
    constructor (options) {
        super(options);
        this.children = options.children || [];
    }
    addMovie(movie) {
        this.children.push(movie);
        this.el.appendChild(movie.render().el);
        //add new movie to the children and render it
    }
    render (){
        if (this.children.length > 0) {
            let renderWithParams = _.template(templates.movieListHTML);
            this.children.forEach((movieView) => {
                this.el.appendChild(movieView.render().el);
            });

        } else {
            this.el.innerText = "No movies";
        }
        return this;
    }
}
class MovieView extends View {  
    render () {
        var renderWithParams = _.template(templates.movieHTML);
        this.el.textContent = renderWithParams({
            title: this.model.title,
            year: this.model.year
        });
        return this;
    }
}

// 1. Создать экземляр коллекции MovieCollection

let moviesCollection = new MovieCollection(MovieModel, 'data.json');

// 2. Вызываем метод fetch 
moviesCollection.fetch().then(function (result){
    //3
    //complex example
    let movieListView = new MovieListView({
        el: document.querySelector('#movie-list'),
        className: 'list-container',
        children: result.map(function (movie){
            return new MovieView({
                 model: movie,
                 className: "movie-item"
            })
        })
    });
    movieListView.render();
})

//HW Session

class MovieSessionListView extends View {
    constructor (options) {
        super(options);
        this.children = options.children || [];
    }
    addMovie(movie) {
        this.children.push(movie);
        this.el.appendChild(movie.render().el);
    }
    render (){
        if (this.children.length > 0) {
            let renderWithParams = _.template(templatesSession.movieListHTML);
            this.children.forEach((movieSessionView) => {
                this.el.appendChild(movieSessionView.render().el);
            });

        } else {
            this.el.innerText = "No movies session";
        }
        return this;
    }
}
class MovieSessionView extends View {  
    render () {
        var renderWithParams = _.template(templatesSession.movieHTML);
        this.el.textContent = renderWithParams({
            title: this.model.title,
            year: this.model.year,
            day: this.model.day,
            time: this.model.time,
            img: this.model.img_src
        });
        return this;
    }
}



let moviesSessionCollection = new MovieCollection(MovieModel, 'session.json');


moviesSessionCollection.fetch().then(function (result){

    let movieSessionListView = new MovieSessionListView({
        el: document.querySelector('#movie-list'),
        className: 'list-session-container',
        children: result.map(function (movie){
            return new MovieSessionView({
                 model: movie,
                 className: "movie-session-item"
            })
        })
    });
    movieSessionListView.render();
})

