function giaiThua() {
    var x = document.getElementById("giaithua").value;
    var sum = 1;
    for (var i = 1; i <= x; i++) {
        sum *= i;
    }
    document.getElementById("txtGiaiThua").innerHTML = sum;
}