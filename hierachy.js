const employeesData = [{
    id: 2,
    name: 'Abhishek (CTO)',
    reportees: [6]
}, {
    id: 3,
    name: 'Abhiram (COO)',
    reportees: []
}, {
    id: 6,
    name: 'Abhimanyu (Engineering Manager)',
    reportees: [9]
}, {
    id: 9,
    name: 'Abhinav (Senior Engineer)',
    reportees: []
}, {
    id: 10,
    name: 'Abhijeet (CEO)',
    reportees: [2, 3],
}];

const findCeo = (employee) => {
    let parent = employeesData.filter((emp) => emp.reportees.indexOf(employee.id) > -1);
    // console.log(parent);
    if (parent && parent.length > 0) {
        return findCeo(parent[0]);
    }
    else {
        return employee;
    }
}

const logHierarchy = (employee, indent) => {
    console.log('-'.repeat(indent), employee.id, employee.name);
    for (let i = 0; i < employee.reportees.length; i++) {
        let emp = employeesData.filter((x) => employee.reportees[i] === x.id);
        logHierarchy(emp[0], indent + 4);
    }
}

const traverse = (employee) => {
    // console.log(employee);
    let ceo = findCeo(employee);
    // console.log('ceo', ceo);
    logHierarchy(ceo, 0)
}

traverse(employeesData[0])