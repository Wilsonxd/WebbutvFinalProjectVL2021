var total = 0;
function add2Cart(namn, pris) {

    var tabell = document.getElementById("TableCart");
    var rad = tabell.insertRow();
    var cell1 = rad.insertCell();
    cell1.innerHTML = namn;
    var cell2 = rad.insertCell();
    cell2.innerHTML = "$" + pris;
    total += pris;
    document.getElementById("purchaseInfo").innerHTML = "Total: " + "$" + total;
}

function displayTable() {
    document.getElementById('hideShow').style.display = "block";
}

function Rensa() {
    if (confirm("Are you sure you want to clear your cart?")) {
        total = 0;
        document.getElementById("purchaseInfo").innerHTML = "Total: " + "$" + total;
        var tabell = document.getElementById("TableCart");
        tabell.innerHTML = "<tr><td>Name</td><td>Pris</td></tr>";
        if (total == 0) {
            document.getElementById('hideShow').style.display = "none";
        }
    } else { }
}

var ix = 0;
function increaseNum() {
    document.getElementById('increase').value = ++ix;
}

function checkOut() {
    alert("Your order has been sent! Thank you!")
}