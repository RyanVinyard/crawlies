$(document).ready(function () {
  $("form#critter-select").submit(function(event) {
  var critter = $("#critterchoice").val();

  if (critter === "Snakes") {
    $("#snakes").show();
    $("#turtles").hide();
    $("#insects").hide();
  }
  else if (critter === "Turtles") {
    $("#turtles").show();
    $("#snakes").hide();
    $("#insects").hide();
  }
  else { (critter === "Insects")
    $("#insects").show();
    $("#snakes").hide();
    $("#turtles").hide();
  }
  event.preventDefault();
  });
});
