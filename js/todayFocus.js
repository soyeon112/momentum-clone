/* todayFoucs관리 js파일입니다.
✅오늘 가장 중요한일을 적어놓을 수 있습니다. (생성과 삭제만 가능)
*/
const focusForm = document.querySelector(".focusForm");
const inputTodayFocus = focusForm.querySelector("#todayFocus");
const focusList = document.querySelector(".focusList");
const focusListUl = document.querySelector(".focusList ul");
const focusItem = document.querySelector(".focusList span:last-child");
const fcousCheckBox = document.querySelector("#focusCheckBox");

//아이템 생성
function makeFocusItem(todayFocus) {
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkBox");
  const span = document.createElement("span");
  span.innerHTML = todayFocus;
  checkBox.addEventListener("click", () => {
    //아이템 삭제 - 체크박스 선택시
    checkBox.checked = true;
    const chbParent = checkBox.parentElement;
    console.log(chbParent);
    chbParent.remove();
    focusForm.classList.remove("hidden");
    focusList.classList.remove("active");
    localStorage.removeItem("todayFocus");
  });
  li.appendChild(checkBox);
  li.appendChild(span);
  focusListUl.appendChild(li);
}
//아이템 입력
function submitFocus(event) {
  event.preventDefault();
  const todayFocus = inputTodayFocus.value;
  localStorage.setItem("todayFocus", todayFocus);
  inputTodayFocus.value = "";
  isTodayFocus();
}

focusForm.addEventListener("submit", submitFocus);

//로컬스토리지에 todayFocus있는지 확인
//이미 스토리지에 있으면 그 값 불러오고, 없으면 입력창 나타남.
function isTodayFocus() {
  const todayFocus = localStorage.getItem("todayFocus");
  console.log(todayFocus, typeof todayFocus);
  if (todayFocus) {
    focusForm.classList.add("hidden");
    focusList.classList.add("active");
    makeFocusItem(todayFocus);
    // focusItem.innerText = todayFocus;
  } else {
    focusForm.classList.remove("hidden");
    focusList.classList.remove("active");
  }
}

isTodayFocus();
