var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloud Service';
/*function getIdpw(){
var ID = prompt('ID 입력',' ');
alert(ID+ '가 로그인함.') ;
var pss = '1234' ;
var pw = prompt('pw 입력',' ');
if (pw === pss) 
    alert('OK');    
   else 
    alert('RETURN');    
}
getIdpw();

document.querySelector('h1').onclick = function(){
    getIdpw();
} */

var myImage = document.querySelector('img');
myImage.onclick = function()  {
        var Src = myImage.getAttribute('src');
    if(Src === 'images/firefox-icon.png') 
      myImage.setAttribute ('src','images/firefox-icon2.png');
     else 
      myImage.setAttribute ('src','images/firefox-icon.png');
}

//그림클릭 사진변경