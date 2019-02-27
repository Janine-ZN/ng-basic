/* class Shape {

    area: number;
    color: string; 

    constructor(name:string,width:number,height:number){
        this.area = width * height;
        this.color = "pink";
    };
    shoutout(){
        return `I'm ${this.color} ${this.name} with an area of ${this.area} cm²`

    }
}
var square = new Shape("square",30,30);
console.log(square.shoutout());
console.log('Area of Shape:' + square.area);
console.log('Name of Shape:' + square.name);
console.log('Color of Shape:' + square.color);
console.log('Width of Shape:' + square.width);
console.log('Height of Shape:' + square.height); */
class Greeter {
    greeting : string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return `hello ${this.greeting}`
    }
}
let greeter = new Greeter("world");
console.log(greeter.greeting);