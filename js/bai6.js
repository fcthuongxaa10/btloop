function taoThe() {
    var content = "p-3 mb-2 bg-danger text-white";
    var content1 = "p-3 mb-2 bg-primary text-white";
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            document.getElementById("txtDiv" + i).innerHTML = "<div class='" + content + "'></div>";
            console.log("<div class='" + content + "'></div>");
        } else {
            console.log("le");
            document.getElementById("txtDiv" + i).innerHTML = "<div class='" + content1 + "'></div>";
        }
    }
}