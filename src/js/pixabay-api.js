    import axios from 'axios';
    const API_KEY = '52835666-1230dcd88b93a283721c6818c';


    export function getImagesByQuery(query){
        
        const params = new URLSearchParams({
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        });
        
        return axios(`https://pixabay.com/api/?${params}`)
            .then(res => {
                return res.data;
            })
}
    