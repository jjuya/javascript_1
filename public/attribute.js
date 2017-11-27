// Q. table의 크키를 내가 원하는 만큼으로 설정하기

// 1. 버튼을 누른다.
// 1-1. 버튼 요소 가져온다
// 1-2. 버튼 요소에 eventlistener(click)를 달아준다.
// 1-3. 버튼을 눌렀을 때 실행시킬 메소드를 작성한다.
// 2. table 태그 요소를 가지고 온다.
// 2-1. prompt 창을 띄운다.
// 2-2. prompt 창에 내가 원하는 사이즈를 입력한다.
// 2-3. table의 style 속성 중 width 속성을 바꾼다. 


function setWidth() {
    var tb = document.getElementById('myTable');
    
    var size = prompt("원하는 사이즈를 입력해 주세요");
    
    tb.setAttribute('style', 'width:' + size + '%;');

}

var btn = document.getElementById('setAttribute');
console.log(btn);

btn.onclick = function() {
    console.log("button!!!!!")
    
    setWidth();
}

