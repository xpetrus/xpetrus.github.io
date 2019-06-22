$(document).ready(function(){
    $(".fa-envelope-square").on("click", function(event){
        event.preventDefault();
        window.location.href = "mailto:phsiao24@gmail.com?subject=Hello%20There";

    });

    $(".fa-linkedin").on("click", function(event){
        event.preventDefault();
        window.location.href = "https://www.linkedin.com/in/hsiaopeter/";
    });

    $(".fa-github-square").on("click", function(event){
        event.preventDefault();
        window.location.href = "https://github.com/xpetrus"; 
    })

})