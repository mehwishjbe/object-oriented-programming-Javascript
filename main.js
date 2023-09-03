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

//Value types
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
console.log(obj);