function timeConversion(time) {
  let timeFormat = time.split(":");
  let period = timeFormat[2].slice(-2);

  let hour = parseInt(timeFormat[0]);
  let minute = timeFormat[1];
  let second = timeFormat[2].slice(0, 2);

  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  hour = hour < 10 ? `0${hour}` : hour;

  console.log(`${hour}:${minute}:${second}`);
}

timeConversion("07:05:45PM");
