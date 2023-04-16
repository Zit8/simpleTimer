const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const createTimerAnimator = () => {
  let interval;

  return (seconds) => {
    clearInterval(interval);

    let remainingSeconds = seconds;

    timerEl.textContent = formatTime(remainingSeconds);

    interval = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(interval);
      } else {
        timerEl.textContent = formatTime(remainingSeconds);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
