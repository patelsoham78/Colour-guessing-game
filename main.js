var numSquares=6
var colors=generateRandomcolors(numSquares);

var squares=document.querySelectorAll(".square");
var colorPicked=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var modeBtn=document.querySelectorAll(".mode");

for(var i=0;i<modeBtn.length;i++)
{ modeBtn[i].addEventListener("click",function(){
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent=="Easy")
      numSquares=3;
      else
      numSquares=6;
      reset1();
});
}

function reset1(){
    colors=generateRandomcolors(numSquares);
    colorPicked=pickColor();
    colorDisplay.textContent=colorPicked;
    for(var i=0;i<squares.length;i++){
      if(colors[i]){
          squares[i].style.display="block";
            squares[i].style.background=colors[i];}
    else
        squares[i].style.display="none";
    }
    h1.style.background="steelblue";
    messageDisplay.textContent="";  
    reset.textContent="New Colors";

}
reset.addEventListener("click",function(){
    reset1();
});

colorDisplay.textContent=colorPicked;

for(var i=0;i<squares.length;i++){
    //add colors to square
    squares[i].style.background=colors[i];
    
    //add click listener
    squares[i].addEventListener("click",function(){
        //grab color of picked square
        var clickedColor=this.style.background;
       
        if(clickedColor == colorPicked)
         { messageDisplay.textContent="Correct";
           changeColors(clickedColor); 
           h1.style.background=clickedColor;
           reset.textContent="PLAY AGAIN?";          
        }
        else
          {this.style.background="#232323";
          messageDisplay.textContent="Try Again!!";}
    });
}

function changeColors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
function pickColor()
{
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomcolors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    arr.push(randomColor());
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb("+ r +", "+ g +", "+ b +")" ;
}
