$(document).ready(function () {

    console.log("ready");

    //Current Date

    $("#currentDay").text(curDay);

    //Creating div, classes and variables

    var blockDiv = $(".time-block");

    var hour = 9;
    var dateTime = "AM";

    for (var i = 0; i < 9; i++) {


        var newRow = $("<div>");
        newRow.attr("class", "row");

        var hourColumn = $("<div>");
        hourColumn.attr("class", "col-2 hour");
        hourColumn.text(hour + ":00 " + dateTime)

        var descriptionColumn = $("<textarea>");
        descriptionColumn.attr("class", "col-8 description");

        var saveBtn = $("<div>");
        saveBtn.attr("class", "col-2 saveBtn");

        var iconBtn = $("<i>");
        iconBtn.attr("class", "fas");
        iconBtn.html("<i class='fas'>&#xf0c5;</i>");


        newRow.append(hourColumn, descriptionColumn, saveBtn);
        saveBtn.append(iconBtn);
        blockDiv.append(newRow);
        descriptionColumn.append(presentColor, pastColor, futureColor);
        hour++;

        if (hour === 12) {
            dateTime = "PM";
        }

        else if (hour === 13) {
            hour = 1;
        }

        //Assigning the colors

        var presentColor = $("<div>");
        presentColor.attr("class", "present");

        var pastColor = $("<div>");
        pastColor.attr("class", "past");

        var futureColor = $("<div>");
        futureColor.attr("class", "future");

        if (hourColumn === m) {
            descriptionColumn = "present";
        } else if (hourColumn < m) {
            descriptionColumn = "past";
        } else {
            descriptionColumn = "future";
        }

    }

    //Local Storage

    var events = JSON.parse(localStorage.getItem("events")) || {};

    $.each(events, function (key, value) {
        $("[data-hour=" + "]").children("col-8 description").val(value)
    })

    $(document).on("click", ".fas", "col-2 saveBtn", function () {
        event.preventDefault();

        var userInput = $(this).siblings("col-8 description").val();

        var hour = $(this).parent().attr("data-hour");

        events[hour] = userInput

        localStorage.setItem("events", JSON.stringify(events));

    })
});




