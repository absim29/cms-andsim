const baseUrl = `https://api.noroff.dev/api/v1`;
export const url = `${baseUrl}/square-eyes/`;

export async function getData() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        return results;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }
}

getData();