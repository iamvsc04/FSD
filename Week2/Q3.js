function updateEmployeeDetails(employee,newRole)
{
    return {...employee,role:newRole};
}
const employee = {name: "Afroz", role: "Developer", age: 28, location: "IN"}
console.log(employee);
const updemp=updateEmployeeDetails(employee,"Senior Developer");
console.log(updemp);
