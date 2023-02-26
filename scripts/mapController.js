// WARNING: The functions in this file require the "roomData.js" file loaded on the webpage to run without errors

function changeMap(element) {
    // Change to corresponding building and floor
    // Call different function to highlight room

    let destination = element.value;

    // Whole campus
    if (destination === "Campus") {
        document.getElementById("map").src = "images/campus.jpg";
        document.getElementById("floorInput").value = "0";
        document.getElementById("floorInput").min = "0";
        document.getElementById("floorInput").max = "0";

    
    // Buildings
    } else if (destination === "SIWB") {
        // SIWB default floor is 3
        document.getElementById("map").src = "images/SIWB_F3.jpg";
        document.getElementById("floorInput").value = buildings["SIWB"].defaultFloor;
        document.getElementById("floorInput").min = buildings["SIWB"].minFloor;
        document.getElementById("floorInput").max = buildings["SIWB"].maxFloor;
    } else if (destination === "RB") {
        // RB default floor is 3
        document.getElementById("map").src = "images/rb-lvl-3.jpg";
        document.getElementById("floorInput").value = buildings["SIWB"].defaultFloor;
        document.getElementById("floorInput").min = buildings["SIWB"].minFloor;
        document.getElementById("floorInput").max = buildings["SIWB"].maxFloor;
    } else if (destination === "GHA") {
        // Floor plans only available for 2nd floor
        document.getElementById("map").src = "images/gha-toilets-lvl-2.jpg";
        document.getElementById("floorInput").value = buildings["GHA"].defaultFloor;
        document.getElementById("floorInput").min = buildings["GHA"].minFloor;
        document.getElementById("floorInput").max = buildings["GHA"].maxFloor;
    } else if (destination === "GSA") {
        document.getElementById("map").src = "images/grays-toilets-lvl-1.jpg";
        document.getElementById("floorInput").value = buildings["GSA"].defaultFloor;
        document.getElementById("floorInput").min = buildings["GSA"].minFloor;
        document.getElementById("floorInput").max = buildings["GSA"].maxFloor;
    }
}


function changeFacility(element) {
    // Eating outlets
    if (destination === "costa") {
        document.getElementById("map").src = "images/SIWB_F2.jpg";
        document.getElementById("floorInput").value = "2";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
        showRoomPin("costa");
    } else if (destination === "subway") {
        document.getElementById("map").src = "images/rb-lvl-3.jpg";
        document.getElementById("floorInput").value = "3";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
        showRoomPin("subway");
    }
}


function showRoomPin(room) {
    // Function to later show the room pin...
    // Will require rooms data (with x and y location)
}