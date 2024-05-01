// NAVIGATION BAR
function nav(){
    var x = document.getElementById("header");
    if(x.className === "nav")
    {
        x.className += "responsive";
    }
    else
    {
        x.className = "nav";
    }
}