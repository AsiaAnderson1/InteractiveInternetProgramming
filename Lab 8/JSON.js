var bookJava = {title: "Wuthering Heights", author: "Emily Bronte", totalPageNumbers : 212, ISBN number: 9788633300056};
var bookJSON = JSON.stringify(bookJava);
console.log(bookJSON);


var employeeJSON = '{ "first name":"Jason", "last name" : "Anderson", "id": 301, "address": "2050 Phoenix Ln.", "job title":"Teacher" }';
var employeeJava = JSON.parse(employeeJSON);
console.log(employeeJava);