console.log("script.js file loaded");

// DOCUMENT READY FUNCTION
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

  // When SUBMIT button is clicked
  // Compute accordingly and display converted temperature
  // Change background color according to hot or cold.
  document.getElementById("submit").addEventListener("click", function () {
    // console.log("submit button clicked");
    var inputVal = document.getElementById("tempInput").value;
    if (unitSelected() === "fahrenheit") {
      // console.log("detected Fahrenheit input");
      var outputVal = Math.round( (5/9) * (inputVal - 32) );
      document.getElementById("tempDisplay").innerHTML = outputVal + "°C";
      setBackgroundColor(inputVal, unitSelected());
    }
    else if (unitSelected() === "celsius") {
      // console.log("detected Celius input");
      var outputVal = Math.round( (9/5 * inputVal) + 32 );
      document.getElementById("tempDisplay").innerHTML = outputVal + "°F";
      setBackgroundColor(inputVal, unitSelected());
    }
  });

  // When CLEAR button is clicked
  // Reset input field value to nothing, and reset displayed temperature.
  document.getElementById("clear").addEventListener("click", function () {
    // console.log("clear button clicked");
    document.getElementById("tempInput").value = "";
    document.getElementById("tempDisplay").innerHTML = "0°C";
    document.getElementById("tempDisplay").className = "";
  });

  // To set background color according to hot or cold,
  // based on converted temperature value.
  function setBackgroundColor (temp, unit) {
    console.log(temp, unit);
    if (unit === "celsius" && temp > 32) {
      document.getElementById("tempDisplay").className = "hotColor";
    }
    else if (unit === "celsius" && temp <= 32) {
      document.getElementById("tempDisplay").className = "coldColor";
    }
    if (unit === "fahrenheit" && temp > 90) {
      document.getElementById("tempDisplay").className = "hotColor";
    }
    else if (unit === "fahrenheit" && temp <= 90) {
      document.getElementById("tempDisplay").className = "coldColor";
    }
  }

  // To read which radio button is selected,
  // in order to determine temp unit selected (celsius or fahrenheit).
  function unitSelected () {
    var radioButtons = document.getElementsByClassName("unitSelected");
    var unit = "";
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        unit = radioButtons[i].value;
        // unit is either "fahrenheit" or "celsius"
        return unit;
      }
    }
  }

});
