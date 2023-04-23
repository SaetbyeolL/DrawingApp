const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//Paint brush
canvas.width=800;
canvas.height=800;
ctx.lineWidth = lineWidth.value;//5
let isPainting = false;//when it not moving

///////////////////////////////////////////////////SET UP

// ctx.fillRect(200, 200, 50, 200);//left wall
// ctx.fillRect(400, 200, 50, 200);//right wall
// ctx.fillRect(300, 300, 50, 100);//door
// ctx.fillRect(200, 200, 200, 20);//ceiling
// ctx.moveTo(200, 200);//pointer
// ctx.lineTo(325, 100);//left roof
// ctx.lineTo(450, 200);//right roof
// ctx.fill();
/////////////////////////////////////////////////// HOUSE

// ctx.fillRect(210-40, 200-55, 20, 100);//left arm
// ctx.fillRect(350-40, 200-55, 20, 100);//right arm
// ctx.fillRect(260-40, 200-55, 60, 200);//body
// ctx.arc(250, 100, 50, 0, 2 * Math.PI);//head
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle="white";
// ctx.arc(260+10, 80, 8, 1 * Math.PI, 2 * Math.PI);//left eye
// ctx.arc(220+10, 80, 8, 1 * Math.PI, 2 * Math.PI);//right eye
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.arc(250, 100, 30, 0, 1 * Math.PI);////mouth
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle="black";
// ctx.fillRect(220, 340, 20, 250);
// ctx.fillRect(260, 340, 20, 250);
// ctx.closePath();
///////////////////////////////////////////////////// HUMAN 
/*
Tips: 
If you want to change color,
first think about whether you need new path or not.
If it need new path,  
*/
////////////////////////////////////////////////////////// MAKING PAINTING BOARD

//ctx.lineWidth = 2;
//ctx.moveTo(0,0);//if not this, we need to click twice first.
//moveTo: it only move brush without drawing line
// function onClick(event){
//     ctx.moveTo(0,0);
//     ctx.lineTo(event.offsetX, event.offsetY)//utilized by element of event
//     ctx.stroke();//draws the path you have defined with all those moveTo() and lineTo() methods(default: black)
// }

// canvas.addEventListener("click", onClick) //Execute event function when clicked


//////////////////////////////////////////////////////////// DRAWING BY CLICK

// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff"
// ]

// function onClick(event){
//     ctx.beginPath();//this makes separate path
//     //ctx.moveTo(0,0);
//     ctx.moveTo(event.offsetX-1,event.offsetY-1)

//     const color = colors[Math.floor(Math.random() * colors.length)];
//     //Math.floor: rounds down and returns the largest integer less than or equal to a given number.
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick);

////////////////////////////////////////////////////////// DRAWING BY MOUSEMOVE

// function onMove(event){
//     if(isPainting){
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.moveTo(event.offsetX, event.offsetY);//it just move mouse, not painting.
// }
// function StartPainting(){
//     isPainting = true;
// }
// function StopPainting(){
//     isPainting = false;
// }

// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", StartPainting);
// canvas.addEventListener("mouseup", StopPainting);
// canvas.addEventListener("mouseleave", StopPainting);//when leaving the board 
//document.addEventListener("mouseleave", onMouseUp);<-this one is same above.

/////////////////////////////////////////// DRAWING ONLY WHEN MOUSEDOWN

// function onMove(event){
//     if(isPainting){
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY);//it just move mouse, not painting.
// }
// function StartPainting(){
//     isPainting = true;
// }
// function StopPainting(){
//     isPainting = false;
// }

// function onLineWidthChange(event){//event always gives us new value of input in console. 
//     console.log(event.target.value);
//     ctx.lineWidth = event.target.value;
// }

// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", StartPainting);
// canvas.addEventListener("mouseup", StopPainting);
// canvas.addEventListener("mouseleave", StopPainting);//when leaving the board 

// lineWidth.addEventListener("change", onLineWidthChange);

//////////////////////////////////////////////////////// LineWidth change

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);//it just move mouse, not painting.
}
function StartPainting(){
    isPainting = true;
}
function StopPainting(){
    isPainting = false;
    ctx.beginPath();
}

function onLineWidthChange(event){//event gives us new value of input in console. 
    //console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;//fill  line
    ctx.fillStyle = event.target.value; // fill inside something
}

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;//fill  line
    ctx.fillStyle = colorValue;// fill inside something
    color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", StartPainting);
canvas.addEventListener("mouseup", StopPainting);
canvas.addEventListener("mouseleave", StopPainting);//when leaving the board 

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick))

////////////////////////////////////////////////////////////// SET UP Paint Color






























































































