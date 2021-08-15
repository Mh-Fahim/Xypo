//this two fuction work in headrer

function openNav() { //nvigation menu open
    document.getElementById("mySidenav").style.width = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
}

function closeNav() { //navigation menu close
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}