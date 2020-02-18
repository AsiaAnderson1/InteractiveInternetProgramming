//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() /*function definition- if you have a number of steps you
want to perform over and over and you want to call this functionality 
write a function*/
{
    alert("alert - hello world!");//popup window    
}


function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}


function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality
function multiply ()
{
    var x = 25;
    var b = 42;
    var multi = x * b;
    alert("25 X 42 is " + multi);
}

function divide()
{
    var y = 48;
    var c = 12;
    var div = y / c;
    alert("Each child gets" + div + " pencils.")
}

function mean()
{
    var a = 25;
    var b = 47;
    var c = 98;
    var d = 46;
    var e = 52;
    var mean = (a + b + c + d + e) / 5;
    alert("The mean of 25,47,98,46, and 52 is: " + mean );
}

function firstLoop()
{
    sum = 0;
    for(i = 2; i <= 200; i++)
    {
        if (i % 2 == 0) 
        {
           sum = sum + i;
        }
     
    }
    alert("The sum of all even numbers between 2 and 200 is:" + sum)
}
 
// take x and add it with its two preceeding number
function secondLoop()
{
    count = 19;
    x = 0;
    y = 1;
    for(i = 0; i <= count; i++)
     {
       lastTwo = x + y; 
       x = y;
       y = lastTwo;
       console.log("The first 20 fibonacci numbers:" + lastTwo); 
    }
    

}

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement

Loops:
For loop
While loop
Do while loop

Break
*/

function compare()
{
    //var charlie = 162;
    //var john = 135;
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    if (charlie > john)
    {
        alert("Charlie is taller")
    }
    else if ( charlie == john) // = means assignment == means equality
    {
        alert("They are the same height.")
    }
    
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False
//boolean is a flag
    switch(fruit) //if you have multiple if statements switch is better
    {
        case "banana":
            isTropical = true; // keywords that are a valid keyword
            break;// make a decision of what you want to do and stop execution
        // without break statement it would continue
        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

function Repeat()
{
    //start
    // do these steps
    //repeat steps 1 and 2
    // check if we have reached the desired count
    // if so exit

    /*while (counter < 5) //checks comparison first and then runs loop
    {
        console.log(counter)
        console.log("hello")
        counter++;
    }
    counter = 0;
    console.log("hello");
    counter++;// you can use a counter to count how many times a task is being done
    console.log("hello");*/
counter = 0;
/*do
{
    //this is a trial- get to try and then must pay for membership
    console.log(counter);
    console.log("hello");//this loop will be executed once and then checks condition
    
} while (x < 4)*/

}


function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

    