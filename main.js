document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://top-250-movies.herokuapp.com/api/v1/movies/top'
  const tbody = document.querySelector('tbody')
  const paginationContainer = document.querySelector('.pagination-container')
  const searchField = document.querySelector('.search-field')
  const logo = document.querySelector('.logo')

  // 非同步方式抓取 API 的資料
  const fetchMovies = async url => {
    const response = await fetch(url)
    const movies = await response.json()
    return movies
  }

  // 把所需要的分頁資訊一次整理在一個物件裡面
  const paginate = (movies, pageNumber = 1, pageSize = 12) => {
    const offset = pageSize * (parseInt(pageNumber) - 1)
    const totalPages = Math.ceil(movies.length / pageSize)
    const paginatedMovies = movies.slice(offset, pageSize * pageNumber)

    return {
      theFirstTwoPages:
        parseInt(pageNumber) - 2 <= 0 ? 1 : parseInt(pageNumber) - 2,
      theNextTwoPages:
        parseInt(pageNumber) + 2 >= totalPages
          ? totalPages
          : parseInt(pageNumber) + 2,
      totalPages: totalPages,
      movies: paginatedMovies,
    }
  }

  // 一列一列的產生器
  const generateTableRows = movies => {
    if (movies.length === 0) {
      alert('哭哭，沒有這部電影喔！')
    }

    movies.forEach(m => {
      tbody.innerHTML += `
        <tr>
          <td>${m.rank}</td>
          <td><a href="${m.link}" target="_blank">${m.title}</a></td>
          <td>${m.year}</td>
          <td>${m.director}</td>
          <td>${m.main_stars}</td>
          <td>${m.rating}</td>
        </tr>
      `
    })
  }

  // 先產生分頁的基本 html
  const generatePagination = () => {
    paginationContainer.innerHTML += `
      <span class="back-page">＜</span>
      <div class="pagination">
      </div>
      <span class="next-page">＞</span>
      <div class="pagination-counter">
      </div>
    `
  }

  // 根據當前頁面和總頁數來渲染頁數
  const generatePageNumbers = (
    previousPages,
    nextPages,
    totalPages,
    pageNumber,
    url
  ) => {
    const paginationCounter = document.querySelector('.pagination-counter')
    const pagination = document.querySelector('.pagination')

    for (let index = previousPages; index <= nextPages; index++) {
      let span = document.createElement('span')
      span.innerHTML = index
      span.addEventListener('click', e => {
        renderView(url, e.currentTarget.textContent)
      })
      if (parseInt(span.textContent) === parseInt(pageNumber)) {
        span.classList.add('active')
      }
      pagination.append(span)
    }
    paginationCounter.innerHTML =
      totalPages === 0 ? '0 / 0 頁' : `${pageNumber} / ${totalPages} 頁`
  }

  // 讓不能夠繼續按下一頁的時候按鈕消失
  const disablePageButton = (pageNumber, totalPages) => {
    const previousButton = document.querySelector('.back-page')
    const nextButton = document.querySelector('.next-page')

    if (totalPages <= 1) {
      previousButton.classList.add('disabled')
      nextButton.classList.add('disabled')
    } else if (parseInt(pageNumber) === 1) {
      previousButton.classList.add('disabled')
    } else if (parseInt(pageNumber) === parseInt(totalPages)) {
      nextButton.classList.add('disabled')
    } else {
      previousButton.classList.remove('disabled')
      nextButton.classList.remove('disabled')
    }
  }

  // 替上下頁按鈕新增事件
  const addEventToPageButton = url => {
    const currentPageNumber = document.querySelector('.active')?.textContent
    const previousButton = document.querySelector('.back-page')
    const nextButton = document.querySelector('.next-page')
    previousButton.addEventListener('click', () => {
      renderView(url, parseInt(currentPageNumber) - 1)
    })
    nextButton.addEventListener('click', () => {
      renderView(url, parseInt(currentPageNumber) + 1)
    })
  }

  // 主要的渲染邏輯都在這邊
  const renderView = async (url, pageNumber) => {
    const rawMoviesData = await fetchMovies(url)
    const paginationObject = paginate(rawMoviesData, pageNumber)
    const {movies, theFirstTwoPages, theNextTwoPages, totalPages} = paginationObject

    // 清空舊有的 html 物件，避免事件的重複綁定
    tbody.innerHTML = ''
    paginationContainer.innerHTML = ''

    // 產生的過程
    generateTableRows(movies)
    generatePagination()
    generatePageNumbers(
      theFirstTwoPages,
      theNextTwoPages,
      totalPages,
      pageNumber,
      url
    )
    disablePageButton(pageNumber, totalPages)
    addEventToPageButton(url)
  }

  // 起始點
  renderView(url, 1)

  // 搜尋的效果
  searchField.addEventListener('submit', async e => {
    e.preventDefault()
    const searchInputValue = document.querySelector('.search-term').value
    const queryUrl = url + `?query=${searchInputValue}`
    //R:接起來後繼續丟URL
    await renderView(queryUrl, 1)
  })

  logo.addEventListener('click', async e => {
    e.preventDefault()
    await renderView(url, 1)
  })
})
