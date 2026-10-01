function go(page){
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll(".tab").forEach(function(tab){

        tab.addEventListener("click", function(){

            document.querySelectorAll(".tab")
            .forEach(function(t){
                t.classList.remove("active");
            });

            tab.classList.add("active");
        });

    });

    document.querySelectorAll(".seat").forEach(function(seat){

        seat.addEventListener("click", function(){

            seat.classList.toggle("selected");

        });

    });

});