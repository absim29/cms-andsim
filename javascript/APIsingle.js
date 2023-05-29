import { url } from "./APIall.js";
import { id } from "./const.js";

const ProdUrl = url + id;

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