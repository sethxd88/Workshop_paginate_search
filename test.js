function pagination(data) {
  // 取得資料長度
  const dataTotal = data.length;

  // 要顯示在畫面上的資料數量，預設每一頁只顯示五筆資料。
  const perpage = 12;
  console.log(`全部資料:${pageTotal} 每一頁顯示:${perpage}筆`);

  const pageTotal = Math.ceil(dataTotal / perpage);
  
console.log(`全部資料:${dataTotal} 每一頁顯示:${perpage}筆 總頁數:${pageTotal}`);

}

