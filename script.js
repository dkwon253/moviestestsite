document.querySelector("#searchfield").addEventListener("click", getInput);
document.querySelector("#searchGif").addEventListener("click", getGif);

function getGif () {
    let userInput = document.getElementById("searchbox").value;

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=d662E0Rx6vhJjM576vaFEKyF4RcnvCjz&q=${userInput}&limit=25&offset=0&rating=g&lang=en`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        displayGif(data.data);
      });
}
function displayGif(gif) {
  console.log(gif);
  const movies = gif.map(function (stuff) {
    const { 
        images:{fixed_height:{url}}
    } = stuff;
    console.log(url)
    return `<div class="results">
            <img src="${url}"/>
        </div>
        `;
  });
  document.querySelector("#result").innerHTML = movies;
}

function getInput () {
    let userInput = document.getElementById("searchbox").value;

    fetch(`https://www.omdbapi.com/?apikey=b7b6e4d1&s=${userInput}`)

    .then (function (res) {
        return res.json();
    })
    .then(function (data){
        displayData(data.Search);
    });
}
function displayData (titles) {
    console.log(titles)
    const movies = titles.map(function (stuff) {
        const {
            Title,
            Poster
        } = stuff;
        return `<div class="results">
            <p>${Title}</p>
            <img src="${Poster}"/>
        </div>
        `;
    });
    document.querySelector("#result").innerHTML = movies;
}



