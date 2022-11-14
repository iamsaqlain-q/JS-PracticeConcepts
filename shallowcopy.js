var employee = {
    ename: "Elon",
    eaddress: "New York"
}
console.log("Shallow Copy : ");
console.log("Employee=> ", employee);
var newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("After Shallow copy : ");
newEmployee.ename = "Mark";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);