function changeMap(destination) {
    // Change to corresponding building and floor

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
        document.getElementById("floorInput").value = "3";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
    } else if (destination === "RB") {
        // RB default floor is 3
        document.getElementById("map").src = "images/rb-lvl-3.jpg";
        document.getElementById("floorInput").value = "3";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
    } else if (destination === "GHA") {
        // Floor plans only available for 2nd floor
        document.getElementById("map").src = "images/gha-toilets-lvl-2.jpg";
        document.getElementById("floorInput").value = "2";
        document.getElementById("floorInput").min = "2";
        document.getElementById("floorInput").max = "2";
    } else if (destination === "GSA") {
        document.getElementById("map").src = "images/grays-toilets-lvl-1.jpg";
        document.getElementById("floorInput").value = "1";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "2";
    }
}


function changeFacility(destination) {
    // Change to corresponding building and floor, depending on facility
    // Call different function to point to room

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


function floorUp() {
    let currentFloor = +(document.getElementById("floorInput").value);
    let building = document.getElementById("buildingsDropdown").value;

    if (building === "SIWB") {
        if (currentFloor < 6) {
            document.getElementById("floorInput").value = currentFloor + 1;
            document.getElementById("map").src = "images/SIWB_F" + (currentFloor + 1) + ".jpg";
        }
    } else if (building === "RB") {
        if (currentFloor < 6) {
            document.getElementById("floorInput").value = currentFloor + 1;
            document.getElementById("map").src = "images/rb-lvl-" + (currentFloor + 1) + ".jpg";
        }
    } else if (building === "GSA") {
        if (currentFloor < 2) {
            document.getElementById("floorInput").value = currentFloor + 1;
            document.getElementById("map").src = "images/grays-toilets-lvl-" + (currentFloor + 1) + ".jpg";
        }
    }
}


function floorDown() {
    let currentFloor = +(document.getElementById("floorInput").value);
    let building = document.getElementById("buildingsDropdown").value;

    if (building === "SIWB") {
        if (currentFloor > 1) {
            document.getElementById("floorInput").value = currentFloor - 1;
            document.getElementById("map").src = "images/SIWB_F" + (currentFloor - 1) + ".jpg";
        }
    } else if (building === "RB") {
        if (currentFloor > 1) {
            document.getElementById("floorInput").value = currentFloor - 1;
            document.getElementById("map").src = "images/rb-lvl-" + (currentFloor - 1) + ".jpg";
        }
    } else if (building === "GSA") {
        if (currentFloor > 1) {
            document.getElementById("floorInput").value = currentFloor - 1;
            document.getElementById("map").src = "images/grays-toilets-lvl-" + (currentFloor - 1) + ".jpg";
        }
    }
}

function changeFloor(newFloor) {
    let building = document.getElementById("buildingsDropdown").value;

    if (building === "SIWB") {
        document.getElementById("map").src = "images/SIWB_F" + newFloor + ".jpg";
    } else if (building === "RB") {
        document.getElementById("map").src = "images/rb-lvl-" + newFloor + ".jpg";
    } else if (building === "GSA") {
        document.getElementById("map").src = "images/grays-toilets-lvl-" + newFloor + ".jpg";
    }
}


function showRoomPin(room) {
    // Function to later show the room pin...
    // Will require rooms data (with x and y location)
}