/* please use Big-5 code open cuz school server can not use with UTF-8 */

var input = document.querySelector("#input")

// 綁定 input id
// console.log(input)

var btnall = ["新增","顯示","載入","移除","編號","清除"]
var btn = document.querySelectorAll(".btn")

btnall.forEach(function(e,i,a){

   btn[i].value =  btnall[i] ;

})
// e,i,a
// 元素值，索引，本身
console.log(btnall)

// 綁定多個按鈕 ID

var number;
// 計算li清單數量

var ul = document.querySelector('#list');
// 綁定 ul 清單 #list
// .list 拿去當 class 樣板了

var li;
// 『新增 li element 』的變數

// localStorage 假測試
// var data = ['a','b'];
// localStorage.setItem('data', JSON.stringify(data));

var getOldData = localStorage.getItem("data");
var books = "";

function getBooks(){
  if( getOldData == null ){
    books = [];
  }else{
    books = JSON.parse(getOldData);   
  }
  // return books;
}
getBooks()

var renderList = books;

updateList();

function updateList()

    {
      
      var len = renderList.length;
      var str = "";
      for(var i = 0; i < len; i++){
        str += `
        <li>
          <a data-num=${i}>
            <i class='fa-solid fa-circle-xmark'></i>
            ${renderList[i]}
          </a>
        </li>`;
      }
      ul.innerHTML = str;
      // ${renderList.[i]}
      // console.log(renderList);

      document.getElementById('Count').innerHTML = len;

      var renderListStr = JSON.stringify(renderList);
      localStorage.setItem("data",renderListStr);

    }


btn[0].addEventListener("click", Newlist, false);

    //新增資料
    function Newlist() {
      
      var text = input.value;
      if(text == ""){
        alertTest();
        return;
      }
      renderList.push(text);
      input.value = "";
      updateList();
        // li = document.createElement('li');
        // li.setAttribute('class', 'item');
        // li.textContent = input.value;
        // ul.appendChild(li);
        // ul.innerHTML += "<li>" + input.value + "</li>";
    
    
      }    

btn[1].addEventListener("click", Show, false);

  //顯示或隱藏
  function Show(){
    var render = document.getElementById('render');
    var show = document.getElementById('show');

    if (render.style.display === 'none') {
      render.style.display = 'block';
      show.innerText = "隱藏";
      // number = document.querySelectorAll("ul li");
    }
    else {
      render.style.display = 'none';
      show.innerText = "顯示資料";


    }
    updateList();

  }

btn[2].addEventListener("click", DefaultList, false);

    //載入特定資料
    function DefaultList() {

      var defaults = document.getElementById('default');

      ul.setAttribute('class', 'wrap');
      var t;
      var original = ["網頁設計", "物聯網設計" , "CSS版型設計" , "數位學習系統" ]; 

      var flag = false;

      if (flag == false) {

      defaults.disabled=true;
      defaults.innerText = "資料已載入";
        
      document.getElementById("default").disabled=true;

      var mix = [...renderList, ...original]

      renderList =  mix;

      }
      flag = true;
    
            setTimeout(function () {
                defaults.disabled=false;
                defaults.innerText = "再次載入資料";
                flag = false;
            }, 5000);
      
      updateList();
      
    }


btn[3].addEventListener("click", DelList, false);


      function DelList() {
        if (books.length==0 ) {

          console.log(books);
          alert('首次無法執行\n沒資料要刪蝦咪啦');
          return;
        
      }
      else {

      }
      
      if(renderList.length==0 ){

        alert('無法執行\n沒資料要刪蝦咪啦');

      }else{

        renderList.pop();
        
        updateList();

      }
    }

btn[4].addEventListener("click", SortList, false);


// 中文排序會依照編碼大小
// 黑暗執行緒：https://blog.darkthread.net/blog/javascript-chinese-char-sorting/

  function SortList() {
    
    let list = document.querySelector('#list');


  }

  //移除指定
//      
//     let list = document.querySelector('#list') // 取得父層容器節點
// let oldList = document.querySelectorAll('li')[1] // 先選到全部的 li 在用索引值選出我們要指定的
// list.removeChild(oldList) // 移除我們指定的 oldList

btn[5].addEventListener("click", Clear, false);


// Clear('已將移除', 'success');
function Clear(message, className){




  let list = document.querySelector('#list');
  let li   = document.querySelectorAll('.item');
  let div = document.createElement('div');
  
  div.classList.add("list", "alert");

  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  div.innerText = "您刪除了"+ li.length +"本";
  
  let IO = document.querySelector('#IO');
  let parentDiv = document.querySelector('.parentDiv');

  // parentDiv.insertBefore(div, IO);
  //容器.insert(要放的,基準點)
  list.innerHTML = '';
  console.log(li.length);
}


// alert 顯示

 function alertTest() {
  Swal.fire({
    icon: 'error',
    title: '新增作業失敗',
    text: '請輸入正確的格式，已避免系統被玩壞哦！',
    html:
    '請 再 <b>確 認</b> 一 次 你 有 輸 入 內 容 (╯°Д°）╯' ,
    confirmButtonText:
    '好哦我了解 <i class="fa fa-thumbs-up"></i>',
    confirmButtonAriaLabel: 'understand',
    footer: '<a href="https://itechdct.ntcu.edu.tw/ntcudct_courses/DigitalCommunication/11024/show_web_write.aspx?ftp_dir=3_class/&pathname=03_2_array_for_list" target=”_blank”>為何會出現此訊息？你說呢？</a>'
    }
  );
}
function confirm() {
  Swal.fire({
      title: "操作確認",
      text: "請點選你想按的按鈕",
      showCancelButton: true
  }).then(function(result) {
     if (result.value) {
          Swal.fire("您按了OK");
     }
     else {
         Swal.fire("您選擇了Cancel");
     }
  });
}



  
  
  


