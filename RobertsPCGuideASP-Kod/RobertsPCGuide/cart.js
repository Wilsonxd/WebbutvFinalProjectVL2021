var total = 0;
function add2Cart(namn, pris) {
    /*Creates the shopping cart*/
    var tabell = document.getElementById("TableCart");
    var rad = tabell.insertRow();
    var cell1 = rad.insertCell();
    cell1.innerHTML = namn;
    var cell2 = rad.insertCell();
    cell2.innerHTML = "$" + pris;
    total += pris;
    document.getElementById("purchaseInfo").innerHTML = "Total: " + "$" + total;
}

/*Displays the table when you add something to the shopping cart*/
function displayTable() {
    document.getElementById('hideShow').style.display = "block";
}

/*Cleans the shopping cart*/
function Rensa() {
    if (confirm("Are you sure you want to clear your cart?")) {
        total = 0;
        document.getElementById("purchaseInfo").innerHTML = "Total: " + "$" + total;
        var tabell = document.getElementById("TableCart");
        tabell.innerHTML = "<tr><td>Name</td><td>Price</td></tr>";
        if (total == 0) {
            document.getElementById('hideShow').style.display = "none";
        }
    } else { }
}

/*Gives alert message when done*/
function checkOut() {
    alert("Your order has been sent! Thank you!")
}