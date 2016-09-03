/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

students = [
    {
        "name": "Arne Andersen",
        "category": "red",
        "email": "arne@mail.com",
        "phone": "28002800",
        "group": ""
    },
    {
        "name": "Berit Brandt",
        "category": "yellow",
        "email": "berit@mail.com",
        "phone": "28602860",
        "group": ""
    },
    {
        "name": "Conrad Carlsen",
        "category": "green",
        "email": "conrad@mail.com",
        "phone": "28802880",
        "group": "group42"
    }
];
var tableBody = document.getElementById("studentTable");
var populateTable = function () {
    tableBody.innerHTML = "";
    for (i = 0; i < students.length; i++) {
        var row = tableBody.insertRow();
        row.insertCell(0).innerHTML = students[i].name;
        row.insertCell(1).innerHTML = students[i].category;
        row.insertCell(2).innerHTML = students[i].email;
        row.insertCell(3).innerHTML = students[i].phone;
        row.insertCell(4).innerHTML = students[i].group;
        row.insertCell(5).innerHTML = "<input type=\"checkbox\" id=\"check" + i + "\" unchecked>";
        row.insertCell(6).innerHTML = "<input type=\"button\" value=\"Edit\" onclick=\"edit(this)\">";
        row.insertCell(7).innerHTML = "<input type=\"button\" value=\"Delete\" onclick=\"deleteRow(this)\">";
        console.log("populated row" + i);
    }
    console.log("populated");
};
function addGroup(event) {
    document.getElementById("groupName").style.display = 'block';
    document.getElementById("groupSubmit").style.display = 'block';
}
function makeGroup() {
    var name = document.getElementById("groupName").value;
    for (i = 0; i < students.length; i++) {
        if (document.getElementById("check" + i).checked) {
            students[i].group = name;
            tableBody.rows[i].cells[4].innerHTML = students[i].group;
        }
    }
    document.getElementById("groupName").value = "";
    document.getElementById("groupName").style.display = 'none';
    document.getElementById("groupSubmit").style.display = 'none';
    populateTable();
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(i - 1);
}
function deleteData() {
    tableBody.innerHTML = "";
}

populateTable();
var studentForm = document.getElementById("studentForm");
studentForm.onsubmit = function (event) {
    event.preventDefault();
    var student = {};
    student.name = studentForm.fullname.value;
    student.category = studentForm.category.value;
    student.email = studentForm.email.value;
    student.phone = studentForm.phone.value;    
    student.group = "";
    students.push(student);
    populateTable();
};

function edit(student) {
    console.log(student);
    var i = student.parentNode.parentNode.rowIndex;
    var pos = document.getElementById("studentForm");
    var textA = document.createElement("input");
    textA.setAttribute("type", "text");
    textA.setAttribute("id", "nameUpdate");
    textA.setAttribute("placeholder", "Enter new name");
    pos.insertBefore(textA, pos.childNodes[pos.childNodes.length]);
    var textB = document.createElement("input");
    textB.setAttribute("type", "text");
    textB.setAttribute("id", "emailUpdate");
    textB.setAttribute("placeholder", "Enter new email");
    pos.insertBefore(textB, pos.childNodes[pos.childNodes.length]);
    var textC = document.createElement("input");
    textC.setAttribute("type", "text");
    textC.setAttribute("id", "phoneUpdate");
    textC.setAttribute("placeholder", "Enter new phone no.");
    pos.insertBefore(textC, pos.childNodes[pos.childNodes.length]);
    return false;
}
;