/* 배경이미지와 관련된 js파일입니다.
✅body - 배경이미지 랜덤 출력
*/
const imgs = ["0.jpg", "1.jpg", "2.jpg"];
const body = document.querySelector("body");
const img = imgs[Math.floor(Math.random() * imgs.length)];
body.style.background = `url(./img/${img})`;
