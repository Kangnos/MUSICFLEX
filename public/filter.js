function filter(){
    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("Music");

    for(i=0;i<item.length;i++){
        name = item[i].getElementsByClassName("Music_name");
        if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){ 
            item[i].style.display = "grid";
        }else{
            item[i].style.display = "none";
        }
    }
}