var input = document.querySelector("#input");

// 綁定 input id
// console.log(input)

var btnall = ["新增", "顯示", "載入", "移除", "編號", "清除"];
var btn = document.querySelectorAll(".btn");

btnall.forEach(function (e, i, a) {
  btn[i].value = btnall[i];
});
// e,i,a
// 元素值，索引，本身
console.log(btnall);

// 綁定多個按鈕並設置 value 監聽

var ul = document.querySelector("#list");
// 綁定 ul 清單 #list
// .list 拿去當 class 樣板了

// var number;
// 計算li清單數量

var li;
// 『新增 li element 』的變數

// localStorage 假測試
// var data = ['a','b'];
// localStorage.setItem('data', JSON.stringify(data));

var getOldData = localStorage.getItem("data");
// 取得 cookie 資料

var books = "";

function getBooks() {
  if (getOldData == null) {
    books = [];
  } else {
    books = JSON.parse(getOldData);
  }
  // return books;
}
getBooks();

// 如果 cookie 有資料，字串轉陣列放進 books，無則空陣列

var renderList = books;

// 變數

updateList();

//必先執行一次並顯示出來清單，陣列空則無元素

function updateList() {
  var len = renderList.length;
  // 存放目前陣列數量
  var str = "";
  for (var i = 0; i < len; i++) {
    str += `
        <li>
          <a data-num=${i}>
            <i class='fa-solid fa-circle-xmark'></i>
            ${renderList[i]}
          </a>
        </li>`;
  }
  ul.innerHTML = str;
  // ${renderList.[i]} 字串內包含變數
  // console.log(renderList);

  document.getElementById("Count").innerHTML = len;

  var renderListStr = JSON.stringify(renderList);
  localStorage.setItem("data", renderListStr);
  // 陣列轉字串
  // 存進 localStorage
}
//  <a data-num=${i}>
// 排序資料，刪除定位用

btn[0].addEventListener("click", Newlist, false);
// 事件 執行函式 冒泡？點擊

//新增資料
function Newlist() {
  var text = input.value;
  //存放輸入字串
  if (text == "") {
    alertTest();
    return;
  }
  //判定是否輸入

  renderList.push(text);
  //字串加入陣列

  input.value = "";
  //清空輸入值

  updateList();
  // 重新計算陣列數量

  // li = document.createElement('li');
  // li.setAttribute('class', 'item');
  // li.textContent = input.value;
  // ul.appendChild(li);
  // ul.innerHTML += "<li>" + input.value + "</li>";
  // 無考慮儲存資料原始寫法
}

btn[1].addEventListener("click", Show, false);

//顯示或隱藏
function Show() {
  var render = document.getElementById("render");
  var show = document.getElementById("show");
  // show 按鈕， render 清單區塊

  if (render.style.display === "none") {
    render.style.display = "block";
    show.innerText = "隱藏";
  } else {
    render.style.display = "none";
    show.innerText = "顯示資料";
  }
  //updateList();
  //重新計算清單數量 （in fact 多此一舉）
}

btn[2].addEventListener("click", DefaultList, false);

//載入特定資料
function DefaultList() {
  var defaults = document.getElementById("default");

  var original = ["網頁設計", "物聯網設計", "CSS版型設計", "數位學習系統"];

  var flag = false;

  // false 但 true

  if (flag == false) {
    defaults.disabled = true;
    // 不能連續點擊
    defaults.innerText = "資料已載入";

    var mix = [...renderList, ...original];

    renderList = mix;
    //合併陣列語法
  }

  flag = true;

  setTimeout(function () {
    defaults.disabled = false;
    defaults.innerText = "再次載入資料";
    flag = false;
  }, 5000);
  // 計時5000毫秒才解鎖按鈕

  updateList();
  //重新計算清單數量
}

btn[3].addEventListener("click", DelList, false);

function DelList() {
  if (books.length == 0) {
    console.log(books);
    alert("error無法執行");
    return;

    //資料為空
  } else if (renderList.length == 0) {
    alert("無法執行\n沒資料要刪蝦咪啦");
  } else {
    renderList.pop();

    //刪除末項

    updateList();
  }
}

btn[4].addEventListener("click", SortList, false);

function SortList() {
  renderList.sort();
  updateList();
}

//純靠輸入方式移除指定行數
// 刪除陣列特定位置 input-1

// let ul = document.querySelector('#list') // 取得父層容器節點
// let oldList = document.querySelectorAll('li')[input-1] // 先選到全部的 li 在用索引值選出我們要指定的
// ul.removeChild(oldList) // 移除我們指定的 oldList

// 上面幾行替換成
// list.innerHTML = '';
// console.log(li.length);
// updateList();
// 還要刪除 cookie !!

// btn[5].addEventListener("click", Clear(), false);

function Clear() {
  let list = document.querySelector("#list");
  let li = document.querySelectorAll(".item");
  let div = document.createElement("div");

  div.classList.add("list", "alert");

  // div.className = `alert alert-${className}`;
  // div.appendChild(document.createTextNode(message));

  // div.innerText = "您刪除了"+ li.length +"本";

  showAlert("移除", "alert", renderList.length);

  list.innerHTML = "";
  console.log(li.length);
}

// add / del message
function showAlert(message, className, number) {
  const li = document.querySelectorAll(".item");
  const div = document.createElement("div");

  div.className = `alert alert-${className} text-center`;
  div.appendChild(document.createTextNode(message));
  div.innerText += number + "本";

  let IO = document.querySelector("#IO");
  let parentDiv = document.querySelector(".parentDiv");

  //容器.insert(要放的,基準點)
  parentDiv.insertBefore(div, IO);
  //  容器，元素，位置
  // parentDiv.appendChild(IO);

  // Vanish in 5 seconds
  var intervalid = setTimeout("Seconds()", 5000);
  const alert = document.getElementsByClassName("alert");
  console.log(alert);
}

function Seconds() {
  const alert = document.getElementsByClassName("alert");

  alert[0].remove();
  // for ( var i=0; i < alert.length; i++){
  //   console.log(alert[i].innerHTML);
  //   alert[i].remove();

  //   return;

  // }

  // 寫的亂亂的 = = 總之想法是能依序消除提示訊息，但如果消除完畢需要停止執行
}

// alert 顯示

function alertTest() {
  Swal.fire({
    icon: "error",
    title: "新增作業失敗",
    text: "請輸入正確的格式，已避免系統被玩壞哦！",
    html: "請 再 <b>確 認</b> 一 次 你 有 輸 入 內 容 (╯°Д°）╯",
    confirmButtonText: '好哦我了解 <i class="fa fa-thumbs-up"></i>',
    confirmButtonAriaLabel: "understand",
    footer: '<a href="https://itechdct.ntcu.edu.tw/ntcudct_courses/DigitalCommunication/11024/show_web_write.aspx?ftp_dir=3_class/&pathname=03_2_array_for_list" target=”_blank”>為何會出現此訊息？你說呢？</a>',
  });
}

function confirm() {
  Swal.fire({
    title: "操作確認",
    text: "請點選你想按的按鈕",
    showCancelButton: true,
  }).then(function (result) {
    if (result.value) {
      Swal.fire("您按了OK");
    } else {
      Swal.fire("您選擇了Cancel");
    }
  });
}