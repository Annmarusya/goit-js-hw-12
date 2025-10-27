
import { getImagesByQuery, imagesPerPage } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { 
    clearGallery, 
    showLoader, 
    hideLoader, 
    createGallery, 
    showLoadMoreButton, 
    hideLoadMoreButton, 
    smoothScroll 
} from "./js/render-functions";


const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more-btn"); 

let currentPage = 1;
let searchQuery = "";
let totalHits = 0;

form.addEventListener("submit", handleSubmit);
loadMoreBtn.addEventListener("click", handleLoadMore);

async function handleSubmit(e) {
    e.preventDefault();
    
    const query = form.elements['search-text'].value.trim();
    
    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query',
            position: 'topRight',
        });
        return;
    }

    searchQuery = query;
    currentPage = 1;
    totalHits = 0;
    
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    
    try {
        const data = await getImagesByQuery(searchQuery, currentPage);
        totalHits = data.totalHits;

        if (data.hits.length === 0) {
            iziToast.error({
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        } 
        
        createGallery(data.hits); 
        
        if (totalHits > imagesPerPage) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                position: 'bottomCenter',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
    } catch (error) {
        console.error("Error:", error);
        iziToast.error({
            title: 'Request Failed',
            message: 'An error occurred while fetching data. Please check connection.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
        form.reset(); 
    }
}

async function handleLoadMore() {
    currentPage += 1;
    
    showLoader();
    hideLoadMoreButton();
    
    try {
        const data = await getImagesByQuery(searchQuery, currentPage);
        const newImages = data.hits;

        createGallery(newImages); 
        smoothScroll(); 

        const loadedImages = currentPage * imagesPerPage;

        if (loadedImages >= totalHits) {
            hideLoadMoreButton();
            iziToast.info({
                position: 'bottomCenter',
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            showLoadMoreButton();
        }

    } catch (error) {
        console.error("Error:", error);
        iziToast.error({
            title: 'Request Failed',
            message: 'An error occurred while fetching data. Please check connection.',
            position: 'topRight',
        });
        currentPage -= 1; 
    } finally {
        hideLoader();
    }
}