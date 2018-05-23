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
    event.preventDefault();
    console.log("submit hit");

    var newBurger = {
        burger_name: $("#newBurger").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        datatype: "json",
        data: newBurger
    })
    .then(
        function(stuff){
            console.log("new burger added");
            location.reload();
        }
    )
});

