var soChan = "";
var soLe = "";
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        soChan += " " + i;
    } else { soLe += " " + i; }
}
document.getElementById("txtInt").innerHTML = soChan;
document.getElementById("txtInt1").innerHTML = soLe;


var soChan1 = "";
var soLe1 = "";
var n = 0
while (n <= 100) {
    if (n % 2 == 0) {
        soChan1 += " " + n;
    } else { soLe1 += " " + n; }
    n++;
}
document.getElementById("txtInt3").innerHTML = soChan1;
document.getElementById("txtInt4").innerHTML = soLe1;