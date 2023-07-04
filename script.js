const countTo = "5 Jul 2023";

const c = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();

  const totalSecond = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const minutes = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;

  const countDown = document.getElementById("countdown");

  countDown.textContent = `${days} Days ${format(hours)}Hrs : ${format(
    minutes
  )} Min : ${format(seconds)}s`;

  if (totalSecond < 0) {
    clearInterval(c);
    countDown.textContent = `Toooooop`;
  }
}, 1000);

function format(t) {
  return t < 10 ? `0${t}` : t;
}
