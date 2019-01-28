// alert("hello TypeScript!");
// 方法
/* function area(shape : string, width : number, height : number){
    var area = width * height;
    return `I'm a ${shape} with an area of ${area} cm²`
}
document.body.innerHTML = area("长方形",6,6); */
// 接口
/* interface Shape{
    name: string;
    width: number;
    height:number;
    color: string;
}
function area (shape: Shape){
    var area = shape.width * shape.height;
    return `I'm ${shape.name} with area ${area} cm²`
}
console.log(area({width:8,height:5,name:"长方形",color:"blue"})); */
/* 箭头函数 */
var shape = {
    name : "长方形",
    popup: function(){
        console.log(`this inside popup(): ${this.name}`);
        setTimeout(()=>{
            console.log(`this inside setTimeout(): ${this.name}`);
            console.log(`I'm a: ${this.name}`);
        },3000);
    }
};
shape.popup();
