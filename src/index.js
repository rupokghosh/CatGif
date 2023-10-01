const img = document.querySelector('img');
const refreshBtn = document.getElementById('refreshBtn');

// function that fetches the GIF

async function getCatGif(){

   const response =  await fetch('https://api.giphy.com/v1/gifs/translate?api_key=EvM6VPeOTodv8jPWvOvyEFdRCYeU21da&s=cats', {mode: 'cors'});
   const catData = await response.json();
   img.src = catData.data.images.original.url;

}
getCatGif();

// function for refresh button

refreshBtn.addEventListener('click', () =>{
    getCatGif();
})

