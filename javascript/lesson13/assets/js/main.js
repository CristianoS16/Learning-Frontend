function app() {
  const daysNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const setDate = (msg) => {
    const results = document.querySelector(".container h1");
    results.innerHTML = msg;
  };
  const formatHours = (value) => {
    return value > 10 ? value : `0${value}`;
  }
  const getDayName = (date) => {
    return daysNames[date.getDay()]
  }
  const getMonthName = (date) => {
    return monthsNames[date.getMonth()]
  }

  const currentDate = new Date();
  const title = `${getDayName(currentDate)}, ${currentDate.getDate()} of ${getMonthName(currentDate)} of ${currentDate.getFullYear()}, at ${formatHours(currentDate.getHours())}:${formatHours(currentDate.getMinutes())}`;
  setDate(title)

  // const simpleTitle = currentDate.toLocaleString('pt-BR', {dateStyle: 'full'})
  // setDate(simpleTitle)

}

app();
