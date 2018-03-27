var myHeading = document.querySelector('h1');
var id = localStorage.getItem('id');
myHeading.innerHTML = 'Cloud Service'+id;
function getIdpw(){
var ID = prompt('ID 입력',' ');
alert(ID+ '가 로그인함.') ;
localStorage.getItem('id', id);
var pss = '1234' ;
var pw = prompt('pw 입력',' ');
if (pw === pss) 
    alert('OK');    
   else 
    alert('RETURN');    
}

var myImage = document.querySelector('img');
myImage.onclick = function()  {
        var Src = myImage.getAttribute('src');
    if(Src === 'images/firefox-icon.png') 
      myImage.setAttribute ('src','images/firefox-icon2.png');
     else 
      myImage.setAttribute ('src','images/firefox-icon.png');
} 

//그림클릭 사진변경

var but = document.querySelector('button');
but.onclick=function() {
   getIdpw();
}


//버튼+이벤트설정