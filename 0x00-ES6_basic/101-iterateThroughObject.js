export default function iterateThroughObject(reportWithIterator) {
    let employeeString = '';
    const { value, done } = reportWithIterator.next();
  
    while (!done) {
      employeeString += value;
      const nextResult = reportWithIterator.next();
      if (!nextResult.done) {
        employeeString += ' | ';
      }
      value = nextResult.value;
      done = nextResult.done;
    }
  
    return employeeString;
  } 
