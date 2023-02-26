function changeMap(element) {
    // Change to corresponding building and floor
    // Call different function to highlight room

    let destination = element.value;

    if (destination === "Campus") {
        document.getElementById("map").src = "images/campus.jpg";
        document.getElementById("floorInput").value = "0";
        document.getElementById("floorInput").min = "0";
        document.getElementById("floorInput").max = "0";
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
        document.getElementById("floorInput").max = "1";
    }
}