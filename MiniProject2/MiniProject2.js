  
//Global area
window.onload=function() {
//Try and use classname to get a group of divs instead of getting them one by one by id
var divs2 = document.getElementsByClassName("col");
divs2.addEventListener("click", userTurn);

var divs = document.getElementsByClassName("col");
divs.addEventListener("click", computerTurn);

var btnreset = document.getElementById("reset");
btnreset.addEventListener("click", clearGrid);
//if you are writing the same type of code multiple times, you are doing it incorrect

//Attach events using eventlistener here
}

/************** Function area *******************/

//function provided. Add parameter(s) if needed

var userSelections = new Array();
var computerSelections = new Array();
var turn = "X";

function userTurn()
{
    //Add code here
    var div1  = document.getElementsByClassName("col");
    if (div1.innerHtml !== EMPTY)
    {
        return;
    }
    div1.innerHtml = turn;
    userSelections = userSelections + 1;
   // document.getElementsByClassName("col").innerHtml = "X";
}

//function provided. Add parameter(s) if needed
function computerTurn()
{
    //Add code here
    var div1 = document.getElementsByClassName("col");
    for(i = 0; i <= div1.length; i++)
    {
         if(div1 !== "X" && div1 !== "O" )
         {
            document.getElementsByClassName("col").innerHtml = "O";
            computerSelections = computerSelections + 1;
            break;

         }
        else {i++;}
                 
    }

    function clearGrid()
    {
        var div1 = document.getElementsByClassName("col").innerHtml ="";
    }
  
}