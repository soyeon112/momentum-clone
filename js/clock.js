/* 시간과 관련된 함수가 있는 js파일입니다.
✅현재시간, 시간대별 텍스트
✅현재 시간, 분, 초를 불러와 화면에 출력시켜줍니다.
✅1분에 한번씩 setInterval()함수를 호출되며 화면에서 시간이 변경됩니다.
*/

const clock = document.querySelector("#clock");
const timeText = document.querySelector("#timeText");

//시간별 텍스트
const timeTexts = {
  morning: "Good morning, ", // 오전6:00-11:59
  afternoon: "Good afternoon, ", //오후12:00-5:59
  evening: "Good evening, ", //오후6:00-11:59
  dawn: "Good dawn, ", //오전12:00-5:59
};
//현재시간 얻기
function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;

  setTimeText(Number(hours));
}
getTime();
setInterval(getTime, 60000); //1분에 1번씩 호출되게

//시간별 문구 출력
function setTimeText(hours) {
  hours = 3;
  if (6 <= hours && hours < 12) {
    timeText.innerText = timeTexts["morning"];
  } else if (12 <= hours && hours < 18) {
    timeText.innerText = timeTexts["afternoon"];
  } else if (18 <= hours && hours < 24) {
    timeText.innerText = timeTexts["evening"];
  } else if (24 <= hours || hours < 6) {
    timeText.innerText = timeTexts["dawn"];
  }
}
