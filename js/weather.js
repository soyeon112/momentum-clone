/*
Geolocation , Weather APi관련 js파일입니다.
*/
const SO_API_KEY = "7c585f40f338335c110d02443dcdcc33";

function onGeolocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${SO_API_KEY}&units=metric`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      const temp = document.querySelector("#iconTemp span:last-child");
      const city = document.querySelector("#weatherCity");
      const icon = document.querySelector("#weatherIcon");
      console.log(icon);
      city.innerText = data.name; //지역명
      const weather = data.weather[0].main; //날씨정보
      temp.innerText = `${data.main.temp}℃`; //기온
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
  );

  console.log(url); //위도 경도
}
function onGeloError() {
  console.log("오류");
  alert("Can't find you. No Weather for you.😮");
}

//현재 위치 가져오기
navigator.geolocation.getCurrentPosition(onGeolocation, onGeloError);
