function Start()//George Terbeck
{//I'm going to get this out of the way, I had some of this typed out monday so there's no possible way that I copied your code.
    document.getElementById("Start").disabled = true;//this disables the start button once it is pressed
    document.getElementById("Stop").disabled =false;//this enables the stop button once the start button is clicked
    intervalStart();//this links the interval start function
}
function Stop()
{
    document.getElementById("Start").disabled = false;//this enables the start button once the stop is clicked
    document.getElementById("Stop").disabled = true;//All the way down here was typed already
    intervalStop();//this links interval stop
}
function intervalStart()
{
    var image = document.getElementById("memeImage");//this tell it what to affect
    var change = 50;//this is how much it changes by
    intervalID = setInterval(function()
    {
        image.style.left = change+"px";//this also tell it how to change
        image.style.top = change+"px";//this also tells it how to change
        change+=10;//this also tells it how much to change
    },50);//this is how often it changes
}
function intervalStop()
{
    clearInterval(intervalID)//this resets it once stop is pressed
    clearInterval
}