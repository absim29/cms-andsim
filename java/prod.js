// WC_CONSUMER_KEY = "ck_0fcbabfa1cf7a4b38bd95eb5e2d48fa7a537b30c";
// WC_CONSUMER_SECRET = "cs_4691b01e86f866d8684e92e5e0a72b2699169a20";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
export const id = params.get("id");

const apiUrl = `https://cors.noroff.dev/www.joyful-design.no/wp-json`;
const ProdUrl = apiUrl + `/wc/store/products/` + id;


export async function getMovie() {
    try {
        const answer = await fetch(ProdUrl);
        const result = await answer.json();
        return result;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }

}
getMovie();

async function createHtml() {
    const movie = await getMovie();
    const product = document.querySelector(".container");
  

    document.title = movie.name;
    console.log(movie);

    for (let i=0; i<movie.categories.length; i++) {
        let genre = movie.categories[i];
        
        genre = genre.name;
        console.log(genre);
    

        product.innerHTML = '';
        product.innerHTML +=
        `<section class="container">
            <div class="containproduct">
                <h1 class="product-title">${movie.name}</h1>
                <p class="prod-text">${movie.short_description}</p>     
                <p>Release date: ${movie.description}</p>
                <p>Genre: ${genre}</p>
                <h2 id="price"></h2>
                <h3 id="sale"></h3>
            </div>
            <div class="contain-item">
                <img src="${movie.images[0].src}" alt="Cover image of the movie" class="img">
                <button class="cta shop-item-button" id="ctaproduct">BUY NOW</button>
                
            </div>
        </section>`;
        }

    

        if (movie.on_sale === true){

            document.getElementById('sale').innerHTML += `<h3 id="sale">$ ${movie.prices.sale_price}</h3>`;
            document.getElementById('price').innerHTML += `<h2 id="reduced-price">$ ${movie.prices.regular_price}</h2>`;
        }
    
        else {
            document.getElementById('price').innerHTML += `<h2>$ ${movie.prices.regular_price}</h2>`;
            document.getElementById('sale').innerHTML = ``;
        }
    }



    // const shopButton = document.querySelector('.shop-item-button')
    // shopButton.addEventListener('click', () => {
    //     const cartInfo = JSON.parse(localStorage.getItem('CartInfo'));
    //     cartInfo.push(movie);
    //     localStorage.setItem('CartInfo', JSON.stringify(cartInfo));
    // })


createHtml();