// "use strict"
let entry = document.getElementById("entry");

entry.addEventListener("click", addData);
let row = 1

function addData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.getElementById("gender").value;
    let choiceOfFood = document.getElementById("foods").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let display = document.getElementById("display")
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)
    let cell5 = newRow.insertCell(4)
    let cell6 = newRow.insertCell(5)
    let cell7 = newRow.insertCell(6)
    let cell8 = newRow.insertCell(7)

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = choiceOfFood;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    row++;
 document.getElementById("form-group").reset();

}

