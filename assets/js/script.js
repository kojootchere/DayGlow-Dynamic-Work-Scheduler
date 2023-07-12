$(function () {
  // Display the current date in the header of the page.
  $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

  // Loop over each time block
  $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    var currentTime = dayjs().hour();

    // Remove all classes from past, present, and future
    $(this).removeClass("past present future");

    // Apply the past, present, or future class to each time block by comparing the id to the current hour.
    if (hour < currentTime) {
      $(this).addClass("past");
    } else if (hour === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
    var savedEvent = localStorage.getItem("hour-" + hour);
    if (savedEvent) {
      $(this).find(".description").val(savedEvent);
    }
  });

  // Listen for click events on the save button.
  $(".saveBtn").click(function() {
    var hour = $(this).parent().attr("id");
    var event = $(this).siblings(".description").val();

    // Save the user input in local storage.
    localStorage.setItem(hour, event);
  });
});
