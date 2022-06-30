var v1 = 'v1';
var v2 = 'v2';

// 100000 codes
v1 = 'egoing';
// value of v1 has changed
// 100000 codes
// it's hard tell when v1's value changed

var o = {
    v1: 'v1',
    v2: 'v2'
}

function f1() {
    console.log(o.v1)
}

// function f1() {}
// function override

function f2() {
    console.log(o.v2);
}

// f1();
// f2();


var o = {
    v1: 'v1',
    v2: 'v2',
    f1: function () { console.log(this.v1); },
    f2: function () { console.log(this.v2); }
}

o.f1();
o.f2();