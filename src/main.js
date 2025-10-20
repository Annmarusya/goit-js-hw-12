import { getImagesByQuery } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { clearGallery, showLoader, createGallery, hideLoader} from "./js/render-functions";


const form = document.querySelector(".form");


form.addEventListener("submit", handleSubmit);


function handleSubmit(e) {
    e.preventDefault();
    showLoader();
    clearGallery();
    const query = form.elements['search-text'].value.trim();
    
    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query',
        });
        return;
    }

    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            } else {
                createGallery(data.hits); 
            }
        }
        )
        .catch(error => {
            console.error("Error:", error);
        
        iziToast.error({
            title: 'Request Failed',
            message: 'An error occurred while fetching data. Please check connection.',
            position: 'topRight',
        });
            
        })
        .finally(() => {
            hideLoader();
            form.reset();
        });
    
}

