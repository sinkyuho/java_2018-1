var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloude Servixe';
var text = 'this is a text';
function getIdpw(){
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
} //함수 사용!