const employees = {
    name: "Mike",
    streetAddress: "110 Broadstreet",
};
function updateEmployeeWithKeyAndValue(employees, key, value) {
    const copyOfEmployees = { ...employees};

    copyOfEmployees[key] = value;

    return copyOfEmployees;
}
const employee = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "11 Broadway",
)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
const streetAddress = destructivelyUpdateEmployeeWithKeyAndValue(employees, streetAddress, "12 Broadway");

employees;

function deleteFromEmployeeByKey(employees, key) {
    const copyOfEmployees = { ...employees};

    delete copyOfEmployees[key];
    return copyOfEmployees;
}
function destructivelyDeleteFromEmployeeByKey(employees, key) {
    delete employees[key];
    return employees;
}