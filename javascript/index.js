import {getData} from "./APIall.js";

const carouselImg = document.querySelector(".carousel");

async function carousel() {  
    const images = await getData();
    carouselImg.innerHTML = '';
    images.forEach(function(element, index) {
        carouselImg.innerHTML += 
            `<a href="../product.html?id=${element.id}"><img src="${element.image}" alt="Image of movie" class="imghome"></a>`;
    })
        
    };
    
carousel();