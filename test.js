document.addEventListener('DOMContentLoaded', () => {

  // const searchButton = document.querySelector('.search-button');
  // const content = document.querySelector('.content');

  function fetchMovieList() { 
    const fetching = fetch("https://top-250-movies.herokuapp.com/api/v1/movies/top")
    .then((res) => {   
      return res.json();    
      })
        const afterFetching = fetching
        .then((data) => {
          return data;
        })
      return afterFetching
    }

  function addMovieTable() {
    // console.log(fetchMovieList());
    fetchMovieList()
    .then((list) => {
      list.forEach((listN) => {
          const styledTable = document.querySelector('tbody');
            styledTable.innerHTML += `
            <tr>
              <td>${listN.rank}</td>
              <td>${listN.title}</td>
              <td>${listN.year}</td>
              <td>${listN.director}</td>
              <td>${listN.main_stars}</td>
              <td>${listN.rating}</td>
            </tr> 
              `
            })
    })
    .catch(function(error) {
      console.log('Errors:', error.message);
    })
  }

  addMovieTable()
  

  function pagNumbs() { 
    const page = fetch("https://top-250-movies.herokuapp.com/api/v1/movies/top")
    .then((res) => {   
      return res.json();    
      })
        const pageNumbers = page
        .then((data) => {
          function pagination() {
            const dataTotal = data.length;
          return dataTotal;
          }
          return data;
        })
      return pageNumbers
    }
    
    pagNumbs()

})