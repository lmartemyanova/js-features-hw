// const time = document.getElementById('timer')

// intervalId = setInterval(() => {
//     time.textContent = Number(time.textContent) - 1
//   }, 1000)
  
// setTimeout(() => {clearInterval(intervalId), alert('Вы победили в конкурсе!')}, 59000)
  

const timer = document.getElementById('timer');
const time = "00:00:";
timer.textContent = time + timer.textContent;

intervalId = setInterval(() => {
    const seconds = timer.textContent.slice(6) - 1;
    if (seconds >= 10) {
      timer.textContent = `${time}${Number(seconds)}`
    } else {
      timer.textContent = `${time}0${Number(seconds)}`
    }
  }, 1000);
  
setTimeout(() => {clearInterval(intervalId)}, 59000);
setTimeout(() => {alert('Вы победили в конкурсе!')}, 60000);
  