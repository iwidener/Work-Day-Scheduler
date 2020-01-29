$(document).ready(function () {

    console.log("ready");

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
        hour++;

        if (hour === 12) {
            dateTime = "PM"
        }

        else if (hour === 13) {
            hour = 1
        }

    }



});



    
