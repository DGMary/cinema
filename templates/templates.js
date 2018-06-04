let templates = {
    movieHTML: 'Title: <%= title %> Year: <%= year %> ',
    //
    movieListHTML: `Movie List <% for(let i = 0; i < children.length; i++) { %>
                                    <%= children[0]['year'] %> 
                                <% } %>`
}
let templatesSession = {
    movieHTML: 'Title: <%= title %> Year: <%= year %> Day: <%= day %> Time: <%= time %> Img: <%= img %>',
    //
    movieListHTML: `Movie List <% for(let i = 0; i < children.length; i++) { %>
                                    <%= children[0]['year'] %> 
                                <% } %>`
}


