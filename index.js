
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
// welcome.style.opacity=0.2
}   
  backgroundImage()
  console.log("hello world",backgroundImage())