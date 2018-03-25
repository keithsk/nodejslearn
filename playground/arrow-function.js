// produce same result by diff function
var square = (x) => {
	var result = x * x;
	return result;
}
console.log('Func A. '+ square(9));

// JS ES6
var square2 = (x) => x * x;
console.log('Func B. '+ square2(9));

var square3 = (x,y) => x * y;
console.log('Func B. multi arg '+ square3(9,10));


// JS ES6
var user = {
  name: 'Andrew',
  sayHi: () => {
    //console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

// Not recommended
//user.sayHi(1, 2, 3);

// Recommended
user.sayHiAlt(1, 2, 3);
