import { getProducts } from "./prodList.js";

const carouselImg = document.querySelector(".carousel");

async function carousel() {  
    const images = await getProducts();
    carouselImg.innerHTML = '';
    images.forEach(function(movie, index) {
        carouselImg.innerHTML += 
            `<a href="../product.html?id=${movie.id}"><img src="${movie.images[0].src}" alt="Image of movie" class="imghome"></a>`;
    })
        
    };
    
carousel();