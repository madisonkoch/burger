$(function(){
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("changed devoured to ", newDevoured);
                location.reload();
            }
        );
    });
})

$(".create-form").on("submit", function(event){
    console.log("submit hit");
    event.preventDefault();

    var newBurger = {
        //burger_name: $("#newBurger").val().trim()
        burger_name: "guacamole"
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("new burger added");
            location.reload();
        }
    )
});

