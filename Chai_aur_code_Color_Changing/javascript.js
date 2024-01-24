
function setColor(){
    var colorCode = '#';
    const hex = '0123456789ABCDEF';  
    for(let i = 0; i<6; i++){
      colorCode += hex[(Math.round(Math.random()*16))];
    }
      return colorCode;
  };
  
  function changeBgColor(){
    document.body.style.backgroundColor = setColor();
  }
  
  
  let IntervalId;
  document.querySelector('#start').addEventListener('click',function(){
    IntervalId = setInterval(changeBgColor,1000);
  })
  
  
  document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(IntervalId);
  })
  
  