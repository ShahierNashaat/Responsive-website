$(document).ready(function () {

    $("#navbarToggleExternalContent").click(function(){
        if($(this).attr("data-clicked") == 0)
        {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("main").style.pointerEvents = "none";
            document.getElementById("block-div").style.display = "block";
            document.getElementById("nav").style.backgroundColor = "black";
            document.getElementById("nav").style.opacity = "0.5";
            $(this).attr("data-clicked", "1");
        }
    });

    $("#block-div").click(function(){
        if($("#navbarToggleExternalContent").attr("data-clicked") == 1)
        {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("main").style.pointerEvents = "auto";
            document.getElementById("block-div").style.display = "none";
            document.getElementById("nav").style.backgroundColor = "#f8f9fa";
            document.getElementById("nav").style.opacity = "1";
            $("#navbarToggleExternalContent").attr("data-clicked", "0");
        }
    });

})