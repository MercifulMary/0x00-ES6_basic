export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList, // Spread the employeesList to create properties for departments
      },
      getNumberOfDepartments() {
        return Object.keys(employeesList).length;
      },
    };
  }
