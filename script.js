//Time Countdown
let time = 1;
let promoTime = time * 60;

const counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer);
      counting.textContent = `Promo end`;
    } else {
      promoTime--;

      const days = Math.floor(promoTime / 3600 / 24);
      const hours = Math.floor(promoTime / 3600) % 24;
      const min = Math.floor(promoTime / 60) % 60;
      const sec = Math.floor(promoTime) % 60;

      counting.textContent = `TIME: ${format(hours)}hr : ${format(
        min
      )} min : ${format(sec)}s`;
    }
  }, 1000);
}

startCountdown();

//Date countdown

// const countTo = "5 Jul 2023";

// const c = setInterval(() => {
//   const endDate = new Date(countTo);
//   const currentDate = new Date();

//   const totalSecond = (endDate - currentDate) / 1000;

//   const days = Math.floor(totalSecond / 3600 / 24);
//   const hours = Math.floor(totalSecond / 3600) % 24;
//   const minutes = Math.floor(totalSecond / 60) % 60;
//   const seconds = Math.floor(totalSecond) % 60;

//   const countDown = document.getElementById("countdown");

//   countDown.textContent = `${days} Days ${format(hours)}Hrs : ${format(
//     minutes
//   )} Min : ${format(seconds)}s`;

//   if (totalSecond < 0) {
//     clearInterval(c);
//     countDown.textContent = `Toooooop`;
//   }
// }, 1000);

function format(t) {
  return t < 10 ? `0${t}` : t;
}
