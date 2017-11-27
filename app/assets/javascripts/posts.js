// console.log("내가 두번째 왔다!!!!")

// var time = new Date();
// console.log(time);
// console.dir(time);

// var hour = time.getHours();
// console.log(hour);

// if(hour >= 17) {
//     alert("잘가")
// } else {
//     alert("열공")
// }

setInterval(function(){
    var time = new Date();
    console.log(time);
    console.dir(time);
    
    var hour = time.getHours();
    console.log(hour);
    
    if(hour >= 17) {
        alert("잘가")
    } else {
        alert("열공")
    }
}, 1000*60*60);

function alertRest() {
    var time = new Date();
    console.log(time);
    console.dir(time);
    
    var hour = time.getHours();
    console.log(hour);
    
    if(hour >= 17) {
        alert("잘가")
    } else {
        alert("열공")
    }
}

// setInterval(alertRest, 1000*5)