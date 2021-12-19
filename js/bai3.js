var sum = 0;
var n = 1;
while (sum <= 10000) {
    n++;
    sum += n;
}
document.getElementById("txtInt7").innerHTML = "Số nguyên dương nhỏ nhất: " + n;