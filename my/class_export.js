class rectangle {
    constructor(height = 10, width = 100) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class
class polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
}

class cube extends polygon {
    constructor(length = 10, height = 20, width = 30) {
        super(height, width);
        this.name = 'Cube';
        this.length = length;
    }

    volume() {
        return this.height * this.width * this.length
    }
}


if (require.main == module) {
    height = 10;
    width = 20;
    var Rectangle = new rectangle(height, width);
    console.log(Rectangle.area());

    height = 10;
    width = 20;
    length = 30;
    var Cube = new cube(length, height, width);
    console.log('name:', Cube.name);
    console.log('length:', Cube.length);
    console.log('height:', Cube.height);
    console.log('width:', Cube.width);
    console.log('volume:', Cube.volume());

    console.log('This is class_export.js file');
}


module.exports = { rectangle, cube };