function myFunction1() {
  var x = Math.floor((Math.random()*100)+1);
  document.getElementById('nd').innerHTML = x;
  const nhietDo= document.getElementById('box1');
  if(x<0){
    alert('Nhập sai, mời nhập lại!');
  }else if(x <10){
      // box1.style.backgroundColor = "green";
      nhietDo.style.backgroundColor = "green";
  }else if(x<50){
    nhietDo.style.backgroundColor = "blue";
    // confirm('Bật hay không?')
  }else{
    nhietDo.style.backgroundColor = "red";
     setTimeout(() => {
      alert('Nhiệt độ quá cao!');
     })
  }
  };
function myFunction2() {
  var y = Math.floor((Math.random()*100)+1);
  document.getElementById('da').innerHTML = y;
  const doAm= document.getElementById('box2');
    if(y<0){
      alert('Nhập sai, mời nhập lại!');
    }else if(y <200){
      doAm.style.backgroundColor = "green";
    }else if(y<500){
      doAm.style.backgroundColor = "blue";
    }else{
      doAm.style.backgroundColor = "red";
      setTimeout(() => {
        alert('Độ ẩm quá cao!');
       })
    }
  };
function myFunction3() {
  var z = Math.floor((Math.random()*100)+1);
  document.getElementById('as').innerHTML = z;
  const anhSang= document.getElementById('box3');
  
    if(z<0){
      alert('Nhập sai, mời nhập lại!');   
    }else if( z <30){
      anhSang.style.backgroundColor = "green";
    }else if(z<80){
      anhSang.style.backgroundColor = "blue";
    }else{
      anhSang.style.backgroundColor = "red";
      setTimeout(() => {
        alert('Độ sáng quá cao!');
       })
    }
};

myFunction1();
myFunction2();
myFunction3();
function handleRandom(){
  setInterval(() => {
    myFunction1();
    myFunction2();
    myFunction3()
  },5000)
}
//Nut nhan on/off
function myFunction4(){
  if(confirm('Bật đèn không?')==true){
     document.getElementById('image2').style.src ='denbat.jpg'
  }else {
      document.getElementById('image2').style.src ='dentat.jpg';
  }
handleRandom()}