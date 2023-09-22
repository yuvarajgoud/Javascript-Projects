const randomColor = function(){
  const hex="0123456789ABCDEF"
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalId;
document.querySelector('#start').
addEventListener('click',function(e){
  intervalId=setInterval(function(){
    document.body.style.backgroundColor=randomColor()
  },50)
})
document.querySelector('#stop').
addEventListener('click',function(e){
  clearInterval(intervalId)
})