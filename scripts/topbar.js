var topbar = document.getElementById("topbar-links");

function toggleTopbar(){
    if(topbar.style.display === "block"){
        topbar.style.display = "none";
        topbar.style.visibility = "hidden";
    }else{
        topbar.style.display = "block";
        topbar.style.visibility = "visible";
    }
}