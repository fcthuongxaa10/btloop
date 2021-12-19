function tinhTong() {
    var x = document.getElementById("sox").value;
    var n = document.getElementById("son").value;
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    document.getElementById("txtSum").innerHTML = "Tổng: " + sum;
}