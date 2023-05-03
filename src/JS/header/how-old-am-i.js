function howOldAmI(year, month, day) {
  month--;
  const birth = new Date(year, month, day).getTime();
  const now = new Date().getTime();
  const old = now - birth;

  document.querySelector(
    "#root > header > div > div > h3"
  ).innerHTML = `DAY ${Math.trunc(old / 8.64e7)}`;
}

howOldAmI(2004, 4, 20);
//TODO in settinges user enter there birthday then store it in local storage
