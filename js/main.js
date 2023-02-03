/* 최초 사용인지 아닌지 판별하는 함수가 있는 파일입니다. 
✅로컬스토리지에 유저네임 저장, 유저네임 불러오기
✅로컬스토리지에 'userName'이 있다면 유저와 관련된 데이터를 불러와 화면에 출력해줍니다.
✅최초 접속시에는 이름 입력 창이 화면에 출력됩니다.
*/

const inputNameForm = document.querySelector("#inputName");
const nameInputBox = document.querySelector("#name_inputBox");
const clockDiv = document.querySelector(".clock_intro");
const nameText = document.querySelector("#nameText");
const mainFocus = document.querySelector(".mainFocus");
const todayFocus = document.querySelector("#todayFocus");
const userTrue = document.querySelector("#userTrue");

//이름입력후 엔터키
function submitName(event) {
  event.preventDefault();
  const userName = nameInputBox.value;
  localStorage.setItem("userName", userName);
  nameInputBox.value = "";
  isName();
}
inputNameForm.addEventListener("submit", submitName);

// 로컬스토리지에 유저네임 있는지 확인.
// 있으면 시계화면, 없으면 입력창으로 보여짐.
function isName() {
  const userNameKey = localStorage.getItem("userName");

  if (userNameKey) {
    inputNameForm.classList.add("none");
    // clockDiv.classList.add("active");
    // mainFocus.classList.add("active");
    userTrue.classList.add("active");
    nameText.innerText = userNameKey;
  } else {
    inputNameForm.classList.remove("none");
    // userTrue.classList.remove("active");
    // clockDiv.classList.remove("active");
    mainFocus.classList.remove("active");
  }
}
isName();
// localStorage.setItem("name", "soyeon");
