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

$(document).ready(function () {
  $("form#critterselector").submit(function(event) {
    var age = parseInt($("input#age").val());
    var creepiness = $("select#creepiness").val();

    if (age <= 16 && creepiness === "tame") {
      $("#randallturtle").show();
      $("#larryworm, #severussnake, #mortonmoth, #luciferturtle, #dingusviper, #brucethegoose, #beardodragon, #terrytarantula").hide();
    }
    else if (age <= 16 && creepiness === "moderate") {
      $("#larryworm").show();
      $("#randallturtle, #severussnake, #mortonmoth, #luciferturtle, #dingusviper, #brucethegoose, #beardodragon, #terrytarantula").hide();
    }
    else if (age <= 16 && creepiness === "creepyaf") {
      $("#severussnake").show();
      $("#randallturtle, #larryworm, #mortonmoth, #luciferturtle, #dingusviper, #brucethegoose, #beardodragon, #terrytarantula").hide();
    }
    else if (age > 16 && age < 65 && creepiness === "tame") {
      $("#mortonmoth").show();
      $("#randallturtle, #larryworm, #severussnake, #luciferturtle, #dingusviper, #brucethegoose, #beardodragon, #terrytarantula").hide();
    }
    else if (age > 16 && age < 65 && creepiness === "moderate") {
      $("#luciferturtle").show();
      $("#randallturtle, #larryworm, #severussnake, #mortonmoth, #dingusviper, #brucethegoose, #beardodragon, #terrytarantula").hide();
    }
    else if (age > 16 && age < 65 && creepiness === "creepyaf") {
      $("#dingusviper").show();
      $("#randallturtle, #larryworm, #severussnake, #mortonmoth, #luciferturtle, #brucethegoose, #beardodragon, #terrytarantula").hide();
    }
    else if (age >= 65 && creepiness === "tame") {
      $("#brucethegoose").show();
      $("#randallturtle, #larryworm, #severussnake, #mortonmoth, #luciferturtle, #dingusviper, #beardodragon, #terrytarantula").hide();
    }
    else if (age >= 65 && creepiness === "moderate") {
      $("#beardodragon").show();
      $("#randallturtle, #larryworm, #severussnake, #mortonmoth, #luciferturtle, #dingusviper, #beardodragon, #terrytarantula").hide();
    }
    else if (age >= 65 && creepiness === "creepyaf") {
      $("#terrytarantula").show();
      $("#randallturtle, #larryworm, #severussnake, #mortonmoth, #luciferturtle, #dingusviper, #brucethegoose, #beardodragon").hide();
      }
    else {
      alert("Please enter your age, ya dingus!");
    }

  event.preventDefault();
  });
    });
