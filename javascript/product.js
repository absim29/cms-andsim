import {getMovie} from "./APIsingle.js";

const product = document.querySelector(".container");

async function createHtml() {
    const movie = await getMovie();

    product.innerHTML = '';
    product.innerHTML +=
        `<section class="container">
            <div class="containproduct">
                <h1 class="product-title">${movie.title}</h1>
                <p class="prod-text">${movie.description}</p>     
                <p>Release date: ${movie.released}</p>
                <p>Rated: ${movie.rating}</p>
                <p>Genre: ${movie.genre}</p>
                <h2 id="price"></h2>
                <h3 id="sale"></h3>
            </div>
            <div class="contain-item">
                <img src="${movie.image}" alt="Cover image of the movie" class="img">
                <a href="cart.html" class="cta" id="ctaproduct">BUY NOW</a>
            </div>
        </section>`;

    document.title = movie.title;

    if (movie.onSale === true){

        document.getElementById('sale').innerHTML += `<h3 id="sale">$ ${movie.discountedPrice}</h3>`;
        document.getElementById('price').innerHTML += `<h2 id="reduced-price">$ ${movie.price}</h2>`;
    }

    else {
        document.getElementById('price').innerHTML += `<h2>$ ${movie.price}</h2>`;
        document.getElementById('sale').innerHTML = ``;
    }

}

createHtml();