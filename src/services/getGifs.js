const apiKey = 'LvwG1jc3nFK9WIDbWDNxU7Be4zoWvso7';

export default function getGifs ({keyword = 'goku'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response;
            if(Array.isArray(data)) {
                const gifs = data.map(image => {
                    const {images, title, id} = image
                    const { url } = images.downsized_medium;
                    return { title, id, url }
                });
                return gifs;
            }
        })
}