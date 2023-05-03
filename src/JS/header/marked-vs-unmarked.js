//**  Marked VS Unmarked **//

const markedPer = document.querySelector(
  "#marked-vs-unmarked p:nth-of-type(2) span:nth-of-type(1)"
);
const unmarkedPer = document.querySelector(
  "#marked-vs-unmarked p:nth-of-type(2) span:nth-of-type(2)"
);
const markedNum = document.querySelector(
  "#marked-vs-unmarked > span:nth-child(3)"
);
const unmarkedNum = document.querySelector(
  "#marked-vs-unmarked > span:nth-child(4)"
);

//todo get marke days from local storage
function markedVsUnmarked() {
  const markedDayNum = document.querySelectorAll("button.marked").length;
  markedNum.textContent = markedDayNum;
  unmarkedNum.textContent = currentDayNumberOfYear - markedDayNum;
  markedPer.textContent = `${(
    (markedDayNum / currentDayNumberOfYear) *
    100
  ).toFixed(2)}%`;
  unmarkedPer.textContent = `${(
    100 -
    (markedDayNum / currentDayNumberOfYear) * 100
  ).toFixed(2)}%`;
}
