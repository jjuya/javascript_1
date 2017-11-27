// Q. 모든 타이틀 들을 내가 원하는 이름으로 바꾸기
// (버튼을 눌렀을 때)

// 1. 버튼을 누른다.
// 1-1. 버튼의 내용을 가져온다.
// 1-2. 버튼의 onClickListener를 달아준다.
// 1-3. 버튼을 눌렀을 때 메소드를 실행시킨다.
// 2. 타이틀에 해당하는 html element들을 가져온다.(변수에 담는다)
// 3. 각각을 순환하며 내용을 바꾼다.

// function 함수이름(파라미터) {
    
// }

// var 함수이름 = function(파라미터) {
    
// }

// 자바스크립트로 HTML내용물 가지고 오기 
// document.getElementById(id명);
// document.getElementsByClassName(class);
// document.getElementsByTagName(Tag명);
// document.querySelectorAll(css Selector);

function setTitle() {
    var titles = document.getElementsByClassName('title');
    console.log(titles);
    
    for(var i = 0; i < titles.length; i++) {
        titles[i].innerHTML = "잠와..";
    }
}

// getElementsByTagName : 여러 개의 배열
// var btn = document.getElementsByTagName('button')[0];
var btn = document.getElementById('setTitle')
console.log(btn);

btn.onclick = function() {
  alert("Done"); 
  setTitle();
}

//naver.com > 개발자 도구 > console
// var el = document.getElementsByClassName('tnb_link');

// for(var i = 0; i < el.length; i++) {
//     el[i].innerHTML = "메롱"
// }

// var el = document.querySelector('a.tnb_link');
// var el = document.querySelectorAll('a.tnb_link');
