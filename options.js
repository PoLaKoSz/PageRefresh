// Saves options to localStorage.
function save_options() {
  var numRefresh = parseInt(document.getElementById("numRefresh").value);
  localStorage["times_to_refresh"] = numRefresh;

  var appendInt = document.getElementById("appendInt").checked;
  localStorage["append_int"] = appendInt;

  var inputURL = document.getElementById("inputURL").value;
  localStorage["input_url"] = inputURL;

  //chrome.extension.getBackgroundPage().console.log("save:");  
  //chrome.extension.getBackgroundPage().console.log(appendInt);

  // Update status to let user know options were saved.
  var status = document.getElementById("save");
  status.value="Saved!"
  setTimeout(function() {
    status.value = "Save";
  }, 2000);
}


function restore_options() { // populates options from localStorage.
  var numRefresh = localStorage["times_to_refresh"];
  var appendInt = localStorage["append_int"];
  var inputURL = localStorage["input_url"];

  if (!numRefresh || !appendInt || !inputURL) {
    return;
  }

  //chrome.extension.getBackgroundPage().console.log("restore:");  
  //chrome.extension.getBackgroundPage().console.log(appendInt === 'true');

  document.getElementById("numRefresh").value = numRefresh;
  document.getElementById("appendInt").checked = (appendInt === 'true');
  document.getElementById("inputURL").value = inputURL;
 
}

// Event Listners
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);