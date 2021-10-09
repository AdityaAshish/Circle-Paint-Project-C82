var mouseEvent = "empty";
var last_X_position, last_Y_position;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var lineWidth = 1;
var radius = 20

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color_textbox").value; 
    lineWidth=document.getElementById("width_textbox").value;
    radius= document.getElementById(radius_textbox)
    mouseEvent = "mousedown";

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {

    mouseEvent = "mouseup";
    
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {

    mouseEvent = "mouseleave";
    
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth= lineWidth;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);

        ctx.moveTo(last_X_position, last_Y_position)


        console.log("current position of X and Y =");
        console.log("x="+ current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        
        
    }
    last_X_position = current_position_of_mouse_x;
    last_Y_position = current_position_of_mouse_y;
    
}
 function clearCanvas() {
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }