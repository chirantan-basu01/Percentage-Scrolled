
var scrolledBar = document.getElementById("scrolled");

//This function will return the max of the following
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.body.offsetHeight, D.body.clientHeight
    );
}

var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function(e){
    docHeight = getdocHeight();
    windowHeight = window.innerHeight;
};

//For percent calculation
function setScrolled(){
    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    scrolledBar.innerHTML = scrolled;
}

window.addEventListener("scroll",setScrolled);
