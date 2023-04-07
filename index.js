function calculate(){
    let x = document.querySelector("#x1").value;
    let y = document.querySelector("#x2").value;
    let z = x/y;
    if(isNaN(x) || isNaN(y))
    {
        document.querySelector("p").innerHTML = "Please enter a valid number.";
        document.querySelector("p").style = "color : red";
    }
    else if(x.length<1){
        document.querySelector("p").innerHTML = "Please fill the details.";
        document.querySelector("#x1").style = "border : 2px solid red";
    }
    else if(y.length<1){
        document.querySelector("p").innerHTML = "Please fill the details.";
        document.querySelector("#x2").style = "border : 2px solid red";
    }
    else{ 
        document.querySelector("p").innerHTML = ("Each one of you have to pay Rs "+ z.toFixed(2));
    }
    
}