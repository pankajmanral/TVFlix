'use strict'

const api_key = '1419356610838e68689d22ccb1975ca8';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function(url,callback,optionalParam){
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data,optionalParam));
}

export{
    imageBaseURL,
    api_key,
    fetchDataFromServer
};