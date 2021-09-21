var movieList = [];
const imgUrl = document.getElementById("imgUrl");
const movieDiv = document.getElementById("movieDiv");
const movieName = document.getElementById("movieName");
const addResult = document.getElementById("addResult");

function AdicionarMovie() {
  const url = imgUrl.value;
  const name = movieName.value;
  let result;

  if (url && name) {
    let movie = {
      imgId: movieList.length + 1,
      name: name,
      url: url
    };
    movieList.push(movie);

    result = "Filme " + name + " adicionado!";

    movieName.value = null;
    imgUrl.value = null;
    return addMovieResult(true, result);
  }
  result = "Preencha todos os campos!";
  return addMovieResult(false, result);
}

function showMovies() {
  if (movieList.length > 0) {
    removeChild();
    addResult.innerHTML = null;
    for (let movie of movieList) {
      const divElement = document.createElement("div");
      const imgElement = document.createElement("img");
      const labelElement = document.createElement("label");
      const labelText = document.createTextNode(movie.name);

      divElement.classList.add("movieDivContent");
      labelElement.for = movie.name;
      labelElement.appendChild(labelText);
      imgElement.id = movie.imgId;
      imgElement.src = movie.url;

      divElement.appendChild(labelElement);
      divElement.appendChild(imgElement);
      movieDiv.appendChild(divElement);
    }
  } else {
    let result = "Você não adicionou nenhum filme!";
    addMovieResult(false, result);
  }
}

function removeChild() {
  while (movieDiv.firstChild) {
    movieDiv.removeChild(movieDiv.firstChild);
  }
}

function addMovieResult(condition, result) {
  addResult.classList.remove("adicionado");
  addResult.classList.remove("naoAdicionado");

  if (condition) {
    addResult.classList.add("adicionado");
  } else {
    addResult.classList.add("naoAdicionado");
  }
  addResult.innerHTML = result;
}
