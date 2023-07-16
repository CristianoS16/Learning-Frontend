const timer = () => {
  const clock = document.querySelector(".clock");
  // const start_button = document.querySelector(".start");
  // const stop_button = document.querySelector(".stop");
  // const reset_button = document.querySelector(".reset");

  const HOUR_LIMIT = 60;
  const DEFAULT_TIMER = "00:00:00";

  let timerValue = 0;
  let timerTrigger;

  const getHourFormat = (number) => (number > 9 ? `${number}` : `0${number}`);

  const formatTimerView = (timerSecs) => {
    const hour = getHourFormat(
      Math.floor(timerSecs / (HOUR_LIMIT * HOUR_LIMIT))
    );
    const minute = getHourFormat(Math.floor(timerSecs / HOUR_LIMIT));
    const second = getHourFormat(timerSecs % HOUR_LIMIT);
    return `${hour}:${minute}:${second}`;
  };

  const incrementTimer = () => {
    timerValue += 1;
    clock.innerHTML = formatTimerView(timerValue);
  };

  const startClock = () => {
    clock.style.color = "#000000";
    clearInterval(timerTrigger);
    timerTrigger = setInterval(() => incrementTimer(), 1000);
  };

  const stopClock = () => {
    clock.style.color = "#FF0000";
    clearInterval(timerTrigger);
  };

  const resetClock = () => {
    clock.style.color = "#000000";
    clock.innerHTML = DEFAULT_TIMER;
    timerValue = 0;
  };

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("start")) {
      startClock();
    }
    if (el.classList.contains("stop")) {
      stopClock();
    }
    if (el.classList.contains("reset")) {
      resetClock();
    }
  });

  // start_button.addEventListener("click", (e) => startClock());
  // stop_button.addEventListener("click", (e) => stopClock());
  // reset_button.addEventListener("click", (e) => resetClock());
};

timer();
