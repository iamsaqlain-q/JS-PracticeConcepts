var employee = {
    ename: "Jack",
    eaddress: "New York",
}
console.log("Deep Copy : ");
var newEmployee = JSON.parse(JSON.stringify(employee)); //deep copy
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("After Deep copy : ");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);