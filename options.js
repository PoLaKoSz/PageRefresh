function save_options() {
    localStorage["numRefresh"] = parseInt(getUiElementByID("numRefresh").value);

    localStorage["delay"] = parseInt(getUiElementByID("delay").value);
    localStorage["plus_delay"] = parseInt(getUiElementByID("plus_delay").value);

    localStorage["append_int"] = getUiElementByID("appendInt").checked;
    localStorage["append_int_min"] = parseInt(getUiElementByID("randIntMin").value);
    localStorage["append_int_max"] = parseInt(getUiElementByID("randIntMax").value);

    localStorage["input_url"] = getUiElementByID("inputURL").value;

    var status = getUiElementByID("save");
    status.value = "Saved!"
    status.style.background = '#0dd22e';

    setTimeout(function() {
        status.value = "Save";
        status.style.background = '#0298D3';
    }, 2000);
}

function getUiElementByID(elementName) {
    return document.getElementById(elementName);
}

function restore_options() {
    if (isNaN(parseInt(localStorage["delay"]))) {
        inicializeVariables();
    } else {
        document.getElementById("numRefresh").value = localStorage["numRefresh"];

        document.getElementById("delay").value = localStorage["delay"];
        document.getElementById("plus_delay").value = localStorage["plus_delay"];

        document.getElementById("appendInt").checked = (localStorage["append_int"] === 'true');
        document.getElementById("randIntMin").value = localStorage["append_int_min"];
        document.getElementById("randIntMax").value = localStorage["append_int_max"];

        document.getElementById("inputURL").value = localStorage["input_url"];
    }
}

function inicializeVariables() {
    localStorage["numRefresh"] = 0;

    localStorage["delay"] = 10;
    localStorage["plus_delay"] = 2;

    localStorage["append_int"] = false;
    localStorage["append_int_min"] = 0;
    localStorage["append_int_max"] = 0;

    localStorage["input_url"] = "https://www.google.com/";
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);