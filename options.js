// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("search").value;
  localStorage["times_to_search"] = select;

  // Update status to let user know options were saved.
  var status = document.getElementById("save");
  status.value="Saved!"
  setTimeout(function() {
    status.value = "Save";
  }, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var pref = localStorage["times_to_search"];
  if (!pref) {
    return;
  }

  document.getElementById("search").value = pref;
 
}

// Event Listners
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);