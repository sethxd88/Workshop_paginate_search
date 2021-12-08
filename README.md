# 5XCampus 工作坊

* API endpoint： `https://top-250-movies.herokuapp.com/api/v1/movies/top`

# 你將學會

1. 使用 JavaScript 的 fetch 獲取後端伺服器的資料
2. 利用 JavaScript 的方法切割資料來達到分頁渲染
3. 更了解 DOM 元素的互動，方法的作用域，事件的傳達

# 任務一 ： 串接 API 獲取資料

* 使用 [fetch](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch) 的方式拿到事先準備好的資料 
* 善用開發者工具

![](https://i.imgur.com/t2o78lu.png)

# 任務二 ： 根據格式渲染資料

* 想想用什麼樣的方式能夠一筆一筆的渲染？
* 格式已經有挖空，不需要操心 HTML & CSS

table 中的 tbody 的格式：

```htmlmixed=
<tbody>
 <tr>
   <td>排名</td>
   <td><a href="連結">片名</a></td>
   <td>年份</td>
   <td>導演</td>
   <td>主要演員</td>
   <td>評分</td>
 </tr> 
</tbody>
```

`<div class="pagination-container"></div>` 中的格式：

```htmlmixed=
<div class="pagination-container">
  <span class="back-page">＜</span>
  <div class="pagination">
    <!-- 頁碼 -->
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
  </div>
  <span class="next-page">＞</span>
  <div class="pagination-counter">
  </div> 
</div>
```

# 任務三 ： 分頁

* 此時應該可以看到畫面上有 250 筆不同的電影資訊
* 思考如何讓資料可以根據不同的頁碼做切割 ( 資料 / 每個頁面的筆數 / 目前的頁碼)
* 每頁的筆數為 12 筆 ( 需思考除不盡的情況 )
* 頁碼的呈現方式為前後兩頁，極端情況： `[ 1, 2, 3 ]` & `[ 最後一頁 - 2, 最後一頁 - 1, 最後一頁 ]`，其餘都是 `[ 3, 4, 5, 6, 7]`
* 該頁頁碼需要亮起，有做好的 `class: active` 可以使用
* 右邊的總頁數也要和該頁頁碼進行同步

**正常情況的頁碼**

![](https://i.imgur.com/ftS5XWo.png)

**極端情況**

![](https://i.imgur.com/GDoojRH.png)

# 任務四 ： 替上下頁按鈕增加事件，進行換頁

* 除了透過點擊數字來切換分頁外，數字左右的紅色箭頭分別代表上一頁以及下一頁
* 注意事件的重複累加
* 若是沒有上下頁了，就讓按鈕消失，有做好的 `class: disabled` 可以使用 ( 可以看看上方的極端情況，第一頁反之 )

# 任務五 ： 簡易搜尋

* 搜尋的條件是利用事前提供的 API endoint 後方加上 `?query=你要搜尋的條件`
* 搜尋後的頁面依然保持前四個步驟的功能
* 若是搜尋結果為無的話，用個 JavaScript 的 alert 來提醒一下吧！

![](https://i.imgur.com/F6wSEF6.png)