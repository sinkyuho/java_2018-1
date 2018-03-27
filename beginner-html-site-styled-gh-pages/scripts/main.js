function getIdpw() {
    var id = prompt('ID 입력 : ', '');
    var password = prompt(id +'가 사용할 초기 비밀번호 입력 : ', '');
    localStorage.setItem('id', id);
    localStorage.setItem('password', password);
}

var password = localStorage.getItem('password');
if(password ==='123'){
    alert(id+'로그인 성공');
    localStorage.setItem('id',id);
    var id = localStorage.getItem('id');
    var Heading = doNotTrack.querySelector();
    Heading.innerHTML = id + 'Hompage';
}
else if(password === ''){
    alert('비밀번호 입력');
    
}

else {
    alert('비밀번호 확인!');
    getIdpw();
}







