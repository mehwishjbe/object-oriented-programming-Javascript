// 4 main concepts of OOP        -Encapsulation        -Abstraction        -Inheritance        -Polymorphism


// Creating objects by Literal
/* const circle = {
    radius: 1,
    location: {
        x:1,
        y:2,
    },
    draw: function(){
        console.log('Draw');
    }
};
circle.draw(); */

// Creating objects by Factory Function
/* function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('Draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1); */


// Creating objects by Constructor Function
/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    } 
}
const another = new Circle(1); */


// Functions are objects
/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}
Circle.call({}, 1);
Circle.apply({}, [1,2,3]);

const another = new Circle(1); */



/* Value types/Primitives V/S Reference types */

/* //Value types
let x = 10;
let y = x;
x= 20;

//Reference types
let x1 = {value: 10};
let y1 = x;
x1.value= 20;


// Examples
let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number);

let obj = {value: 10 };
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); */

//Adding and deleting property
/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}
const circle = new Circle(10);
circle.location = { x:1 };

const propertyName = 'center-location';
circle[propertyName] = { y : 1};

delete circle.location; */


// Enumerating Property
/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}
const circle = new Circle(10);

for(let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ( 'radius' in circle)
console.log('Circle has a radius'); */


// Private methods
/* function Circle(radius){
    this.radius = radius;
    let defaultLocaiton = { x:0, y:0};
    let computeOptimumLocation = function(factor){
        //......
    }
    this.draw = function(){
        this.computeOptimumLocation(0.1);

        console.log('draw');
    }
}
const circle = new Circle(10);
circle.draw(); */

// Getter and Setter
function Circle(radius){
    this.radius = radius;
    let defaultLocation = { x:0, y:0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw = function(){
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocaition', {

        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
            throw new Error('Invalid Location');

            defaultLocation = value
        }

    });
}
const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();