// WC_CONSUMER_KEY = "ck_0fcbabfa1cf7a4b38bd95eb5e2d48fa7a537b30c";
// WC_CONSUMER_SECRET = "cs_4691b01e86f866d8684e92e5e0a72b2699169a20";



export async function getProducts() {
    const apiUrl = "https://cors.noroff.dev/www.joyful-design.no/wp-json";

    try {
        const response = await fetch(apiUrl + "/wc/store/products");
        const results = await response.json();
        return results;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }
}

getProducts();


async function renderMovieList() {
    const movies = await getProducts();
    const movieList = document.querySelector(".movie-container");
    // console.log(movies);
    
    movieList.innerHTML = '';
    movies.forEach(movie => {
        movieList.innerHTML += 
            `<div>
            <a href="../product.html?id=${movie.id}">
            <img class="item" id="img" src="${movie.images[0].src}">
            </a>            
            </div>`;

  
    })


};

renderMovieList();


export async function getFeatured() {
    const featuredUrl = "https://cors.noroff.dev/www.joyful-design.no/wp-json/wc/store/products?featured=true";
    try {
        const response = await fetch(featuredUrl);
        const featured = await response.json();
        return featured;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }

}

getFeatured();

// console.log(getFeatured());

// const featured = await getFeatured();
// console.log(featured); 

async function featuredMovies() {
    const featured = await getFeatured();
    console.log(featured); 

    const featuredList = document.querySelector("#featured");

    featuredList.innerHTML = '<h1 class="featured">Featured Movies:</h1>';
    featured.forEach(item => {
    featuredList.innerHTML += `<div id="feat">
                                
                                <a href="../product.html?id=${item.id}">
                                <img class="item" id="img" src="${item.images[0].src}">
                                </a>  
                                </div>`
})

}

featuredMovies();