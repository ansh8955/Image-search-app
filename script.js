const accesskey  = "zAy0gDp0fghIpd8YD0RdmbEYl5Y4QVMbTvBdLWAwcM8";

const form = document.querySelector("form");
const input = document.getElementById('search-input');
const searchResults = document.querySelector('.image-container');
const showMore = document.getElementById("show-more-button");




let inputData  = "";
let page = 1;

async function searchImages(){
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

const response = await fetch(url)
const data = await response.json()

// console.log(data);

const results = data.results;

if(page ===1 ){
    searchResults.innerHTML = "";
}

results.map((result)=>{
const imageWrapper = document.createElement('div');

imageWrapper.classList.add('image');
const image = document.createElement('img');
image.src = result.urls.small;
image.alt  = result.alt_description;
const imageLink = document.createElement('a');
imageLink.href = result.links.html;
imageLink.target = "_blank";
imageLink.textContent = result.alt_description;

imageWrapper.appendChild(image);
imageWrapper.appendChild(imageLink);
searchResults.appendChild(imageWrapper);


});

page++;
if(page > 1){
    showMore.style.display = "block";
}


}

form.addEventListener("submit",(event)=>{
event.preventDefault();
page =1;
searchImages();
});

showMore.addEventListener("click",()=>{

searchImages();
});

showMore.addEventListener("click",()=>{

searchImages();
});

