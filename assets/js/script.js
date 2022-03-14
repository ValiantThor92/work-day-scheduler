$(document).ready(function() {

    // display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //assign saveBtn click listener for user input 
    $(".saveBtn").on("click", function() {

        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        // local storage rules
        localStorage.setItem(time, text);    

    })

    //load saved data from LocalStorage - do this for each hour created.
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    function hourTracker() {

    }

    hourTracker();
})

