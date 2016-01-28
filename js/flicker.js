var lastTime = 0;

function flickerPauses(){
  if(lastTime < 5){
    lastTime++;
    return Math.random()*100;
  }else{
    lastTime = 0;
    return Math.random()*3300;
  }
}

function flicker() {
  $("#flicker").toggleClass('on');
  setTimeout(flicker, flickerPauses());
}

flicker();


