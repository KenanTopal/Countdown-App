const countDown = () => {
  const countDate = new Date('Sept 28, 2022 14:35:00').getTime();
  const currentTime = new Date().getTime();
  const gap = countDate - currentTime;

  const second = 1000;
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const kavustayDay = Math.floor(gap / days);
  const kavustayHours = Math.floor(gap/hours)%24
  const kavustayMins = Math.floor(gap/minutes)%60
  const kavustaySecs = (Math.floor(gap/second)%60)
  
  document.querySelector('.day').innerHTML = kavustayDay;
  document.querySelector('.hour').innerHTML = kavustayHours;
  document.querySelector('.minute').innerHTML = kavustayMins;
  document.querySelector('.second').innerHTML = kavustaySecs;
}

setInterval(countDown, 1000)