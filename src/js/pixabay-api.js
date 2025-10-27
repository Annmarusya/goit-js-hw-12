
import axios from 'axios';

const API_KEY = '52835666-1230dcd88b93a283721c6818c';
const PER_PAGE = 15; 

export async function getImagesByQuery(query, page) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: PER_PAGE,
    });

    const url = `https://pixabay.com/api/?${params}`;

    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        throw new Error(`Failed to fetch images: ${error.message}`);
    }
}

export const imagesPerPage = PER_PAGE;