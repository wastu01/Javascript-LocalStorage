# Javascript-LocalStorage
 
todolost 儲存資料至 cookie

邏輯順序：按下按鈕若判定符合條件觸發，` localstorage` 若有資料撈出來，存進 number，再 count 重新計算幾個物件清單顯示。

<hr>

未實現 : 刪除特定資料，查詢特定書籍，排序資料

刪除特定有想法沒做完，每個資料設置 `data* `

查詢跟排序感覺有點難度，要想想。

```javascript
尚待驗證可行性 nodelist
var number = query.selectAll(ul li);
var numberText = [];

newnumber = number.sort(); //方法一

for (i = 0, i < number.length, i++){
	numberText += number[i]  //方法二
}
numberText.sort();
```
歡迎發 issue 提示我這個新手

<hr>

Demo 預覽：[https://wastu01.github.io/Javascript-LocalStorage](https://wastu01.github.io/Javascript-LocalStorage)

Code in Github : [https://github.com/wastu01/Javascript-LocalStorage](https://github.com/wastu01/Javascript-LocalStorage)
