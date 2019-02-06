"use strict";

$(document).ready(function () {
    let tableSelected = null;
    
        $(".document").on("click", ".available", function (e) {
        $("form").fadein(2000);
            tableSelected = e.target
    })

        $(".document").on("click", ".savebtn", function (e) {
        $(tableSelected).removeClass(".available").addClass(".reserved");
        $(form).hide();
    })
    
        $(document).on("mouseenter", ".available", function (e) {
        $(e.target).toggleClass("hover");
    })

        $(document).on("mouseleave", ".available", function (e) {
        $(e.target).toggleClass("hover");
    })

});
