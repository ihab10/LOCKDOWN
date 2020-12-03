//////////////////////// Ali Sheib 28 November //////////////////////////////////
const btns = document.querySelectorAll('button[id^=add]');
const watchItemsList = document.querySelector('.watch-items');
const emptywatchlist = document.querySelector(".empty-watchlist");

let moviesList = [];

  btns.forEach(btn => {

    btn.addEventListener('click',function(){
        var input = btn.parentElement.children[1].textContent;
        addMovie(input);
    }
    );
 }); 


function addMovie(item) {
  if (item !== '') {
    const chosenMovie = {
      id: Date.now(),
      name: item,
    };
    moviesList.push(chosenMovie);
    addToLocalStorage(moviesList); 
  }
}


function showMovies(moviesList) {
  watchItemsList.innerHTML = '';
  moviesList.forEach(function(item) {
      emptywatchlist.innerHTML = '';
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    li.innerHTML = `
      <p data-key=${item.id}>${item.name}<button class="delete-button">Remove</button></p>
    `;
    watchItemsList.append(li);
  });
}

function addToLocalStorage(moviesList) {
  localStorage.setItem('moviesList', JSON.stringify(moviesList));
  showMovies(moviesList);
}
function getFromLocalStorage() {
  const reference = localStorage.getItem('moviesList');
  if (reference) {
    moviesList = JSON.parse(reference);
    showMovies(moviesList);
  }
}
function toggle(id) {
  moviesList.forEach(function(item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(moviesList);
}
function deleteMovie(id) {
  moviesList = moviesList.filter(function(item) {
    return item.id != id;
  });
  addToLocalStorage(moviesList);
}
getFromLocalStorage();
watchItemsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    deleteMovie(event.target.parentElement.getAttribute('data-key'));
  }
});
///////////////////////// Ali Sheib 28 November ///////////////////////////////