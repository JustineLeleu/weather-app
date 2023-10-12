// Function to call to fetch a photo based on the name of a city

import { createApi } from 'unsplash-js';

export function fetchPhoto(element, city) 
{
    const unsplash = createApi({
        accessKey: import.meta.env.VITE_PHOTO_API_KEY,
    });
      
    unsplash.search.getPhotos({
        query: city,
        page: 1,
        perPage: 1,
        orientation: 'portrait',
    })
    .then(result => {
        if (result.errors) {
        console.log('error occurred: ', result.errors[0]);
        } else {
        const photo = result.response;
        console.log(photo.results[0].links.download);
        element.setAttribute("src", photo.results[0].links.download);
        }
    });
}