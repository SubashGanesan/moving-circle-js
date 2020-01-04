function u(){
    document.getElementById("target").setAttribute("style","top:0px");
    
}

function l(){
    document.getElementById("target").setAttribute("style","right:50px");
    
} 

function r(){
    document.getElementById("target").setAttribute("style","left:50px");
    
}

function d(){
    document.getElementById("target").setAttribute("style","top:150px");

}
document.onkeydown=function(e){
    switch(e.keyCode){
        case 37:
            l();
            break;
        case 38:
            u();
            break;
        case 39:
            r();
            break;
        case 40:
            d();
            break;
    }
}