document.addEventListener('DOMContentLoaded', () => {
  // Start !

  const searchButton = document.querySelector('.search-button');
  const content = document.querySelector('.content');
  // const styledTable = document.querySelector('.styled-table');

  const movieLIst = fetch("https://top-250-movies.herokuapp.com/api/v1/movies/top")
  .then((Response) => {
    if(Response.ok) {      
      // console.log(Response);
      return Response.json();    
    }})
      .then((data) => {
        // console.log(data);
        return data;
        })
        .then((list) => {
          // console.log(list);
          list.forEach((listN) => {
            // console.log(listN);
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

  



})