/*********************************************************************/
//Global Area
//event listeners go inside window.onload
//global area gets called as soon as the window is in the browser
//make sure html is rendered and all elements are on page before you call dom code
window.onload = function(){
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", changeSize);

var  btn2 = document.getElementById("btn2");
btn2.addEventListener("click", changeShape);

var btn3  = document.getElementById("btn3");
btn3.addEventListener("click", changeLinkContent);

var btn4  = document.getElementById("btn4");
btn4.addEventListener("click", changeSq);

var btn5  = document.getElementById("btn5");
btn5.addEventListener("click", createSq);

var btn6  = document.getElementById("btn6");
btn6.addEventListener("click", removeSq);

var btn7  = document.getElementById("btn7");
btn7.addEventListener("click", createLink);

var btn8  = document.getElementById("btn8");
btn8.addEventListener("click", removeLink);

var btn9  = document.getElementById("btn9");
btn9.addEventListener("click", changeColor);

var btn10  = document.getElementById("btn10");
btn10.addEventListener("click", changeSquares);




/***************** Function definition area *************/
//write a function to change the size of the box (css)
function changeSize()
{
    //Goal: Get input value and set that to the width and height of div called box1
    var x = document.getElementById("inputSize").value;//get input box's value
    
    var box1 = document.getElementById("box1");//get box1 element which is a div
    box1.style.width = x;
    box1.style.height = x;
    
}

function changeShape()
{
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;;
    

    var box2 = document.getElementById("box2");
    box2.style.width = w;
    box2.style.height = h;

}

function changeColor()
{
    var c = document.getElementById("color").value;
    
    var box2 = document.getElementById("box2");
    box2.style.backgroundColor = c; 
}

function changeLinkContent()
{
    var linkContent = document.getElementById("linkContent1").value;

    var link = document.getElementById("link1");//the link that we are changing
    link.href=linkContent;//updated what the link is pointing to
    link.innerHTML = linkContent; //Updated what the link says
}

function changeSq()
{
    //I want to get all the divs that have class = "square"
    var squares = document.getElementsByClassName("square");//returns more than 1 element
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "yellow";
        squares[i].style.borderRadius = "50px";
        squares[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares[i].innerHTML;
        squares[i].innerHTML = x+ " Box";

    }
}

function changeSquares()
{
    var squares1 = document.getElementsByClassName("square1"); 
    var squares2 = document.getElementsByClassName("square2");
    for(var i=0; i<squares1.length;i++)
    {
        squares1[i].style.backgroundColor = "black";
        squares1[i].style.borderRadius = "50px";
        squares1[i].style.boxShadow = "2px 2px 2px grey";

    }
    for(var i=0; i<squares2.length;i++)
    {
        squares2[i].style.backgroundColor = "white";
        squares2[i].style.borderRadius = "50px";
        squares2[i].style.boxShadow = "2px 2px 2px grey";

    }
}

function createSq(){

    var parent = document.getElementById("parentSq");

    var child = document.createElement("div");
    child.classList.add("square");//add a class to the divs

    parent.appendChild(child);

}

function createLink(){
    // var a = document.getElementById("parentSq");
    var parent = document.getElementById("parentLink");
    var a = document.createElement("a");
    var link = document.createTextNode(" This is a separate link")
    a.appendChild(link);
    a.title = "Created Link";
    a.href = "http://www.tri-c.edu";
   parent.appendChild(a);
}

function removeLink(){
    var parent = document.getElementById("parentLink");
    var child = parent.lastElementChild;
    parent.removeChild(child);
}

function removeSq()
{
    var parent = document.getElementById("parentSq");
    var child = parent.lastElementChild;//returns last child
    parent.removeChild(child);}