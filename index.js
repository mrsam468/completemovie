const global={
  page:window.location.pathname,
}
const baseurl="https://api.themoviedb.org/3/";
const baseurl_image="https://image.tmdb.org/t/p/w500/"
const trend ="/trending/all/day?language=en-US";
const movie = "/movie/popular?language=en-US&page=1";
const serie = "/tv/popular?language=en-US&page=1";


async function fetchapidata(api_url) {
  const apikey = "3fd2be6f0c70a2a598f084ddfb75487c";
  const BaseUrl = baseurl;
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

  welcome.style.backgroundImage = `url(${baseurl_image}${randomIndex.backdrop_path})`;
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
const url=baseurl+  trend ;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#genre-two").appendChild(div)
});
}
async function seemore(){
const url=baseurl+trend ;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#see-more-section").appendChild(div)
});
}

async function movies(){
const url=baseurl+  movie ;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#genre-three").appendChild(div)
});
}
async function seemoremovie(){
const url=baseurl+movie  ;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#see-more-section").appendChild(div)
});
}

async function series(){
const url=baseurl+  serie;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#genre-five").appendChild(div)
});
}
async function seemoreseries(){
const url=baseurl+serie;   ;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#see-more-section").appendChild(div)
});
}

async function moviecollection(){
const url=baseurl+  movie;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#collection-genre").appendChild(div)
});
}
async function seriescollection(){
const url=baseurl+  serie;
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
  div.innerHTML=`<img id="card-image" src=${baseurl_image}${card.poster_path} alt="${card.title}">`
  document.querySelector("#collection-genre").appendChild(div)
});
}
function buttons(){
const buttonone =document.querySelector(".button-one");
const buttontwo =document.querySelector(".button-two");
buttonone.addEventListener("click",()=>{
buttonone.classList.add("button-click");
buttontwo.classList.remove("button-click");
moviecollection()

})
buttontwo.addEventListener("click",()=>{
  buttontwo.classList.add("button-click");
  buttonone.classList.remove("button-click");
  seriescollection()
})
}



switch(global.page){
  case "/index.html":
    trends()
 backgroundImage()
 movies()
 series()
 buttons()

 break;

 case "/trend.html":
 seemore()
 break;
 case "/movies.html":
  seemoremovie()
  break;
  case "/series.html":
seemoreseries()
    break;

}
