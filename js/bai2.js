var count1 = 0;
var count2 = 0;
var n = 0;

for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
        count1 += 1;
    }
}
while (n < 1000) {
    if (n % 3 == 0) {
        count2 += 1;
    }
    n++;
}
document.getElementById("txtInt5").innerHTML = "Có " + count1 + " số chia hết cho 3 bé hơn 1000";
document.getElementById("txtInt6").innerHTML = "Có " + count2 + " số chia hết cho 3 bé hơn 1000";