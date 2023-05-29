import {getData} from "./APIall.js";

const movieList = document.querySelector(".movie-container");

async function renderHtml() {
    const movies = await getData();
    movieList.innerHTML = '';
    movies.forEach(function(element, index) {
        movieList.innerHTML += 
            `<div>
                <a href="../product.html?id=${element.id}"><img class="item" id="img" src="${element.image}"></a>
            </div>`;
    })
        
    };

renderHtml();