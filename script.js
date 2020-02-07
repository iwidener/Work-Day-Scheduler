$(document).ready(function () {

    console.log("ready");

     //Local Storage
     var events = ["","","","","","","","",""]
     events = JSON.parse(localStorage.getItem("events")) || {};


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
        hourColumn.text(hour + ":00 " + dateTime);


        var descriptionColumn = $("<textarea>");
        descriptionColumn.attr("class", "col-8 description");
        descriptionColumn.text(events[i]);

        var saveBtn = $("<div>");
        saveBtn.attr("class", "col-2 saveBtn");
        saveBtn.attr("id", i);

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

    $(document).on("click", ".saveBtn", function (event) {
        event.preventDefault();
        console.log(this);
        var userInput = $(this).siblings(".description").val();

        var hour = $(this).attr("id");

        console.log("hour", hour);
        events[hour] = userInput;
        console.log("events", events);
        localStorage.setItem("events", JSON.stringify(events));

    })
});




