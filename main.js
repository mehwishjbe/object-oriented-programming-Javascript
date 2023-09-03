// 4 main pillars of OOP        -Encapsulation        -Abstraction        -Inheritance        -Polymorphism


// Creating objects by Literal
const circle = {
    radius: 1,
    location: {
        x:1,
        y:2,
    },
    draw: function(){
        console.log('Draw');
    }
};
// circle.draw();

// Creating objects by Factory Function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('Draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);


