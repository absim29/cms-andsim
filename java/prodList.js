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
    console.log(movies);
    
    movieList.innerHTML = '';
    movies.forEach(movie => {
        movieList.innerHTML += 
            `<div>
            <a href="../product.html?id=${movie.id}">
            <h1>${movie.name}</h1>
            <img class="item" id="img" src="">
            </a>            
            </div>`;
    })
    
};

renderMovieList();


