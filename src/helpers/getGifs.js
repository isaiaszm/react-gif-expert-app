
const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6Kjt83Rdh6kfBz7q3OC3BnjT7CKGgLrh`;
    const result = await fetch(url);
    const { data } = await result.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;

}

export default getGifs;
