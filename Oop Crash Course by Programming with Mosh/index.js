//Remember to Comment where necessary

// Objects Literals
/*
const Circle = {
    radius :1,
    location :{
        x:2,
        y:9
    },
    Draw : function(){
        console.log("Objects")
    }
}
Circle.Draw()
*/


//Factory Function
function CreateCircle(radius){
    return{
        radius,
        draw:function(){
            console.log(radius)
        }
    }
}
const circle = CreateCircle(9)
circle.draw()
console.log(circle.radius)


//Constructor
function Circle(radius){
    this.radius = radius,
    this.diameter = function() {
        console.log("Constructor")
    }
}

const another = new Circle(7)
another.diameter()
console.log(another.radius)



//Primitives vs Reference Types

let x = 10
let y = x 

x = 90



let p = {value: 70}
let z  = p

p.value = 100
//Primitives are copied by thier values while Objects are copied by their reference


