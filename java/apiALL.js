
export async function getProducts() {
    const apiUrl = `https://www.joyful-design.no/wp-json/`;

    try {
        const response = await fetch(apiUrl);
        const results = await response.json();
        return results;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }
}

getProducts();



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