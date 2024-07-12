const times = 1;
var cloker_free;
let time_on = 0;
function setClock(){
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  if(hours <= 12){hours = '오전 ' + String(hours)}
  else{hours = '오후 ' + String(hours - 12)}
  cloker_free = `${String(hours)}시 ${minutes}분 ${seconds}초`;
  document.getElementById('clocker').textContent = cloker_free;
  time_on_text = (`켜진지 ${time_on}초 지남`); time_on = Number(time_on + 1);
  document.getElementById('time_on').textContent = time_on_text;
}
setInterval(setClock, 1000);
setClock();
