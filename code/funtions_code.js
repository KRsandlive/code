function setClock(){
   var clockL
   const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0"); 
  const seconds = String(date.getSeconds()).padStart(2, "0"); 
  clockL = hours + ':' + minutes + ':' + seconds;
}