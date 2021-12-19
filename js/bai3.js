var sum = 0;
var n = 1;
while (sum <= 10000) {
    sum += n;
    n++;
}
document.getElementById("txtInt7").innerHTML = "Số nguyên dương nhỏ nhất: " + n;