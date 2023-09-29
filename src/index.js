const img = document.querySelector('img');

let data = fetch('https://api.giphy.com/v1/gifs/translate?api_key=EvM6VPeOTodv8jPWvOvyEFdRCYeU21da&s=cats', {mode: 'cors'});

data.then((response) => {

    return response.json();
}).then((response) => {
    img.src = response.data.images.original.url;
})