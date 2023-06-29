var numSquare=6;
var colors=[];
var pickedcolor;
var squares= document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
var msgdisplay=document.querySelector("#msg");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebutto=document.querySelectorAll(".mode");

init();
function init()
{
   setUpModeButton();
    setUpSquares();
    reset();
}
function setUpSquares()
{
    for(var i=0;i<squares.length;i++)
    {
        // add click lisnere to square
        squares[i].addEventListener("click", function()
        {
            //  grab color of clicked square
            var clickedcolor = this.style.background; 
            // compare color to pickedcolor
            if(clickedcolor === pickedcolor)
            {
                msgdisplay.textContent="Correct";
                resetbutton.textContent="Play Again ?"
                changecolors(clickedcolor);
                h1.style.background=clickedcolor; 
            } 
            else{
                this.style.background="#232323";
                msgdisplay.textContent="Try Again";
            }
        });
    }
}
function setUpModeButton()
{
    // mode button event Listeners
    for(var i=0; i<modebutto.length; i++)
    {
        modebutto[i].addEventListener("click", function()
        {
            modebutto[0].classList.remove("selected");
            modebutto[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
            // if(thsi.textContent === "Easy")
            // {
            //     numSquare=3;
            // }
            // else
            // {
            //     numSquare=6;
            // }
            reset();
        });
    }
 
}
function reset()
{
    // generate all new colors
    colors=generateRandomColor(numSquare);
    // pick a random color from array
    pickedcolor=pickeColor();
    // change colordisplay to match picked color
    colordisplay.textContent=pickedcolor;
    msgdisplay.textContent="";
    resetbutton.textContent= "New Colors";
    // change the colors of squares in the page
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
    h1.style.background = "steelblue"; 
}

// easybtn.addEventListener("click", function(){
//     hardbtn.classList.remove("selected");
//     easybtn.classList.add("selected");
//     numSquare=3;
//     colors=generateRandomColor(numSquare);
//     pickedcolor=pickeColor();
//     colordisplay.textContent=pickedcolor;
//     for(i=0; i<squares.length; i++)
//     {
//         if(colors[i])
//         {
//             squares[i].style.background = colors[i];
//         }
//         else
//         {
//             squares[i].style.display="none";
//         }
//     }
// });

// hardbtn.addEventListener("click", function(){
//     hardbtn.classList.add("selected");
//     easybtn.classList.remove("selected");
//     numSquare=6;
//     colors=generateRandomColor(numSquare);
//     pickedcolor=pickeColor();
//     colordisplay.textContent=pickedcolor;
//     for(i=0; i<squares.length; i++)
//     {
//             squares[i].style.background = colors[i];
//             squares[i].style.display="block";
//     }
// });

resetbutton.addEventListener("click",function(){
    reset();
    // // generate all new colors
    // colors=generateRandomColor(numSquare);
    // // pick a random color from array
    // pickedcolor=pickeColor();
    // // change colordisplay to match picked color
    // colordisplay.textContent=pickedcolor;
    // msgdisplay.textContent="";
    // this.textContent= "New Colors";
    // // change the colors of squares in the page
    // for(var i=0; i<squares.length; i++)
    // {
    //     squares[i].style.background = colors[i];
    // }
    // h1.style.background = "steelblue";
});

function changecolors(color)
{
    // Loop through all squares
    for(var i=0; i<squares.length; i++)
    {
        // change each color to match given color
        squares[i].style.background=color; 
    }
    

}

function pickeColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num)
{
    // make a array
    var arr=[]
    // repeate num times
    for(var i=0;i<num;i++)
    {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor()
{
    // pick a red from 0 255
    var r=Math.floor(Math.random()*256);
    // pick a green from 0 255
    var g=Math.floor(Math.random()*256);
    // pick a blue from 0 255
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}