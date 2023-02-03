/* 명언관련 js파일입니다.
✅ 화면 하단부에 위치한 명언이 관리됩니다.
*/

const quotes = [
  { quote: "Don't dwell on the past.", quoteKo: "과거에 연연하지 마세요." },
  { quote: "Believe in yourself.", quoteKo: "자기 자신을 믿으세요." },
  { quote: "Follow your heart.", quoteKo: "마음이 원하는 대로 따르세요." },
  { quote: "Seize the day.", quoteKo: "오늘을 즐기세요." },
  { quote: "You only live once.", quoteKo: "인생은 한 번 뿐이에요." },
  { quote: "Past is just past.", quoteKo: "과거는 과거입니다." },
  { quote: "Love yourself.", quoteKo: "자기 자신을 사랑하세요." },
  {
    quote: "Where there is a will there is a way.",
    quoteKo: "뜻이 있는 곳엔 길이 있다.",
  },
  {
    quote: "A friend is a second myself.",
    quoteKo: "친구는 제2의 자신이다.",
  },
  { quote: "Be brave.", quoteKo: "용감해지세요." },
];

const quotesContents = document.querySelector("#quotesContents");
const quote = quotesContents.querySelector("span:first-child");
const quoteKo = quotesContents.querySelector("span:last-child");

let todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
quoteKo.innerText = todayQuote.quoteKo;
