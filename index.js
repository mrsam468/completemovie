const global={
  page:window.location.pathname,
}
console.log(global.page)
async function fetchapidata(api_url) {
  const apikey = "3fd2be6f0c70a2a598f084ddfb75487c";
  const BaseUrl = "https://api.themoviedb.org/3/";
  const res = await fetch(
    `${BaseUrl}${api_url}?api_key=${apikey}&language=en-US`
  );
  return res.json();
}


async function backgroundImage() {
  const { results } = await fetchapidata("movie/popular");
  const welcome = document.querySelector("#section-one");
  const randomIndex = results[Math.floor(Math.random() * results.length)];
  // document.querySelector(".the-div").style.backgroundImage=`url(https://image.tmdb.org/t/p/w500/${randomIndex.backdrop_path})`
  //  document.querySelector(".the-div").style.backgroundImage.opacity="0"

  welcome.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${randomIndex.backdrop_path})`;
  welcome.style.backgroundSize = "cover";
  welcome.style.backgroundPosition = "center";
const div = document.createElement("div");
div.classList.add("main-title")
div.innerHTML=`
<h2 id="witcher-text">${randomIndex.title}</h2>
<P id="info-text">${randomIndex.overview}</P>
`
document.querySelector("#title-div").appendChild(div);

}   
async function trends(){
const url='https://api.themoviedb.org/3/trending/all/day?language=en-US' ;
const result =await fetch(url,{
  method:"GET", 
  headers:{
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBkZjBlZDNiMjIyMDgwMDc3NzM2Mzg4ODEwMGM4ZiIsIm5iZiI6MTc0OTc5NTczOS42NjIwMDAyLCJzdWIiOiI2ODRiYzM5YjFmNmQxOGU2NTEzZmRlZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9KOzF92SpnaBDZiJGNFUiJlX52JyFSTJNv1FHiJF-Yw",
    Accept:"application/json"
  }
})
const data=await result.json()
const results=data.results;
results.forEach(card => {
  const div=document.createElement("div");
  div.classList.add("card")
  div.innerHTML=`<img id="card-image" src=https://image.tmdb.org/t/p/w500/${card.poster_path} alt="${card.title}">`
  document.querySelector("#genre-two").appendChild(div)
});
}
async function seemore(){
const url='https://api.themoviedb.org/3/trending/all/day?language=en-US' ;
const result =await fetch(url,{
  method:"GET", 
  headers:{
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBkZjBlZDNiMjIyMDgwMDc3NzM2Mzg4ODEwMGM4ZiIsIm5iZiI6MTc0OTc5NTczOS42NjIwMDAyLCJzdWIiOiI2ODRiYzM5YjFmNmQxOGU2NTEzZmRlZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9KOzF92SpnaBDZiJGNFUiJlX52JyFSTJNv1FHiJF-Yw",
    Accept:"application/json"
  }
})
const data=await result.json()
const results=data.results;
results.forEach(card => {
  const div=document.createElement("div");
  div.classList.add("card")
  div.innerHTML=`<img id="card-image" src=https://image.tmdb.org/t/p/w500/${card.poster_path} alt="${card.title}">`
  document.querySelector("#see-more-section").appendChild(div)
});
}
switch(global.page){
  case "/index.html":
    trends()
 backgroundImage()
 break;

 case "/trend.html":
 seemore()
 break;

}
