let currentRoomPins = [];

function changeMap(destination) {
    clearPins();
    // Change to corresponding building and floor

    // Remove previous choice of facility in facility dropdown
    document.getElementById("facilitiesDropdown").value = "default";

    // Whole campus
    if (destination === "Campus") {
        document.getElementById("map").src = "images/campus.jpg";
        document.getElementById("floorNav").style = "display: none";


        // Buildings
    } else if (destination === "SIWB") {
        // SIWB default floor is 3
        document.getElementById("map").src = "images/SIWB_F3.jpg";
        document.getElementById("floorNav").style = "";
        document.getElementById("floorInput").value = "3";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
    } else if (destination === "RB") {
        // RB default floor is 3
        document.getElementById("map").src = "images/rb-lvl-3.jpg";
        document.getElementById("floorNav").style = "";
        document.getElementById("floorInput").value = "3";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
    } else if (destination === "GHA") {
        // Floor plans only available for 2nd floor
        document.getElementById("map").src = "images/gha-toilets-lvl-2.jpg";
        document.getElementById("floorNav").style = "display: none";
        document.getElementById("floorInput").value = "2";
        document.getElementById("floorInput").min = "2";
        document.getElementById("floorInput").max = "2";
    } else if (destination === "GSA") {
        document.getElementById("map").src = "images/grays-toilets-lvl-1.jpg";
        document.getElementById("floorNav").style = "";
        document.getElementById("floorInput").value = "1";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "2";
    }
}


function changeFacility(destination) {
    clearPins();
    // Change to corresponding building and floor, depending on facility
    // Call different function to point to room

    // Eating outlets
    if (destination === "costa") {
        document.getElementById("map").src = "images/SIWB_F2.jpg";
        document.getElementById("floorNav").style = "";
        document.getElementById("floorInput").value = "2";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
        document.getElementById("buildingsDropdown").value = "SIWB";
        showRoomPin(buildings.SIWB.rooms.costa[0], buildings.SIWB.rooms.costa[1]);
    } else if (destination === "subway") {
        document.getElementById("map").src = "images/rb-lvl-3.jpg";
        document.getElementById("floorNav").style = "";
        document.getElementById("floorInput").value = "3";
        document.getElementById("floorInput").min = "1";
        document.getElementById("floorInput").max = "6";
        document.getElementById("buildingsDropdown").value = "RB";
        showRoomPin(buildings.RB.rooms.subway[0], buildings.RB.rooms.subway[1]);
    } else if (destination === "toilets") {
        let building = document.getElementById("buildingsDropdown").value;
        let floor = document.getElementById("floorInput").value;

        showMultiplePins(buildings[building]["toilets"][floor]);
    } else if (destination === "water-fountains") {
        let building = document.getElementById("buildingsDropdown").value;
        let floor = document.getElementById("floorInput").value;

        showMultiplePins(buildings[building]["fountains"][floor]);
    }
}


function floorUp() {
    clearPins();
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
    clearPins();
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
    clearPins();
    let building = document.getElementById("buildingsDropdown").value;

    if (building === "SIWB") {
        document.getElementById("map").src = "images/SIWB_F" + newFloor + ".jpg";
    } else if (building === "RB") {
        document.getElementById("map").src = "images/rb-lvl-" + newFloor + ".jpg";
    } else if (building === "GSA") {
        document.getElementById("map").src = "images/grays-toilets-lvl-" + newFloor + ".jpg";
    }
}


function showRoomPin(x, y) {
    // Function to later show the room pin...
    // Will require rooms data (with x and y location)
    mapX = document.getElementById("map").getBoundingClientRect().left;
    mapY = document.getElementById("map").getBoundingClientRect().top;

    pin = document.createElement("img");
    pin.setAttribute("src", "images/marker.png");
    // pin.setAttribute("id", x + "_" + y + "_marker");
    pin.setAttribute("class", "pin");
    pin.setAttribute("style", "top: " + (mapY + y) + "px; left: " + (mapX + x) + "px;");
    
    document.getElementById("mapDiv").insertBefore(pin, document.getElementById("map"));

    currentRoomPins.push(pin);
}


function searchRoom(room) {
    room = room.toUpperCase();
    if (room.startsWith("N")) {
        let floor = room[1];
        document.getElementById("map").src = "images/SIWB_F" + floor + ".jpg";
        showRoomPin(buildings.SIWB.rooms[room][0], buildings.SIWB.rooms[room][1]);
    } else if (room.startsWith("SA")) {
        document.getElementById("map").src = "images/gha-toilets-lvl-2.jpg";
        showRoomPin(buildings.GHA.rooms[room][0], buildings.GHA.rooms[room][1]);
    } else if (room.startsWith("A")) { // Not sure... check how the room names start in grays
        let floor = room[1];
        document.getElementById("map").src = "images/grays-toilets-lvl-" + floor + ".jpg";
        showRoomPin(buildings.GSA.rooms[room][0], buildings.GSA.rooms[room][1]);
    }
}


function showMultiplePins(locations) {
    for (let i = 0; i < locations.length; i++) {
        showRoomPin(locations[i][0], locations[i][1]);
    }
}


function clearPins() {
    for (let i = currentRoomPins.length - 1; i >= 0; i--) {
        currentRoomPins.pop().remove();
    }
}