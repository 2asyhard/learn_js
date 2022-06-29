function a() {
    console.log('A');
}

// 익명 함수
var b = function () {
    console.log('B');
}

// console.log(b);

// a();
// b();


function slowfunc(callback) {
    callback();
}

slowfunc(b);


