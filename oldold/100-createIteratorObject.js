export default function createIteratorObject(report) {
    let allEmployees = [];
    for (const department in report.allEmployees) {
      allEmployees.push(...report.allEmployees[department]);
    }
  
    let index = 0;
    return {
      next() {
        if (index < allEmployees.length) {
          return { value: allEmployees[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
