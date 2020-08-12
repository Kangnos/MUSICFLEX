function bgcolorchange(){
    var Bodyelement = document.body;
    var toggle = document.getElementById("toggle-button");
    var logo = document.getElementById("logo");
    var toggle_condition = "unactive"
    
    if(toggle.className == "active"){
        Bodyelement.style.color = "#121111";
        Bodyelement.style.backgroundColor = "rgb(247, 247, 247)";
        logo.style.color = "#121111";
        toggle_condition = "active"
        console.log(toggle_condition)
    }
    else{
        Bodyelement.style.color = "#ebebeb";
        Bodyelement.style.backgroundColor = "#121111";
        logo.style.color = "#ebebeb";
        toggle_condition = "unactive"
        console.log(toggle_condition)
    }
}