document.addEventListener('DOMContentLoaded', () => {

  // const searchButton = document.querySelector('.search-button');
  // const content = document.querySelector('.content');

  function fetchMovieList() { 
    const fetching = fetch("https://top-250-movies.herokuapp.com/api/v1/movies/top")
    .then((response) => {   
      return response.json();    
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
  
  function pagination(data) {
    fetchMovieList()

  }


  // function pagination(data) {
  //   // 取得資料長度
  //   const dataTotal = data.length;
  //   console.log(dataTotal);
  //   // console.log("---");
  //   // console.log(data);
  //   // console.log("---");
  //   // 要顯示在畫面上的資料數量，預設每一頁只顯示五筆資料。
  //   const perpage = 12;
  //   const pageTotal = Math.ceil(dataTotal / perpage);
  //   console.log(`全部資料:${pageTotal} 每一頁顯示:${perpage}筆`);
  //   console.log(`全部資料:${dataTotal} 每一頁顯示:${perpage}筆 總頁數:${pageTotal}`);
  //   return dataTotal
  // }
  // }
})