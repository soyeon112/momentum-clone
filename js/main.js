/* 최초 사용인지 아닌지 판별하는 함수가 있는 파일입니다. 
✅로컬스토리지에 유저네임 저장, 유저네임 불러오기
*/

const inputNameDiv = document.querySelector(".inputName");
const name_inputBox = document.querySelector(".name_inputBox");
const clockDiv = document.querySelector(".clock_intro");
const nameText = document.querySelector("#nameText");

//이름입력후 엔터키
function EnterKeyDown() {
  const userName = name_inputBox.value;
  if (window.event.keyCode == 13 && userName !== "") {
    console.log("엔터키눌림");
    localStorage.setItem("userName", userName);
    isName();
  } else {
    console.log("값이 없음");
  }
}
window.addEventListener("keydown", EnterKeyDown);

// 로컬스토리지에 유저네임 있는지 확인.
// 있으면 시계화면, 없으면 입력창으로 보여짐.
function isName() {
  const userNameKey = localStorage.getItem("userName");
  if (userNameKey !== null) {
    console.log("값이있음,", userNameKey);
    inputNameDiv.classList.add("none");
    clockDiv.classList.add("active");
    nameText.innerText = userNameKey;
  } else {
    console.log("값이 없음");
    inputNameDiv.classList.remove("none");
    clockDiv.classList.remove("active");
  }
}
isName();
// localStorage.setItem("name", "soyeon");
