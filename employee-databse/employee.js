const data = [
    {
        "userId": "rirani",
        "jobTitleName": "Developer",
        "firstName": "Romin",
        "lastName": "Irani",
        "preferredFullName": "Romin Irani",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "408-1234567",
        "emailAddress": "romin.k.irani@gmail.com"
    },
    {
        "userId": "nirani",
        "jobTitleName": "Developer",
        "firstName": "Neil",
        "lastName": "Irani",
        "preferredFullName": "Neil Irani",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "408-1111111",
        "emailAddress": "neilrirani@gmail.com"
    },
    {
        "userId": "thanks",
        "jobTitleName": "Program Directory",
        "firstName": "Tom",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "408-2222222",
        "emailAddress": "tomhanks@gmail.com"
    }
];

(function () {
    const employees_namelist = document.querySelector('.employees_namelist');
    const employees_nameinfo = document.querySelector('.employees_nameinfo');

    console.log(employees_nameinfo);
    let selectedIndex = 0;

    employees_namelist.addEventListener('click', (e) => {
        console.log(e.target.tagName);
        if (e.target.tagName === 'SPAN') {
            console.log(e.target.children[0].innerHTML);
            const y = data.findIndex((z) => {
                const name = `${z.firstName}${z.lastName}`;
                return name === e.target.children[0].innerHTML;
            });
            console.log(y);
            selectedIndex = y;
            renderSingleEmployee();
        }
    })

    const renderEmployees = () => {
        console.log(document.getElementsByTagName('*'));
        data.forEach((emp) => {
            const newEmployee = document.createElement('span');
            newEmployee.classList.add('employees_namelistitem');
            newEmployee.innerHTML = `<div>${emp.firstName}${emp.lastName}</div>`;
            newEmployee.innerHTML += '<button>Delete</button>'
            employees_namelist.append(newEmployee);
        })
    };

    const renderSingleEmployee = () => {
        employees_nameinfo.innerHTML = `<span>${data[selectedIndex].firstName}</span>
        <span>${data[selectedIndex].lastName}</span>
        <span>${data[selectedIndex].employeeCode}</span>
        <span>${data[selectedIndex].region}</span>
        `
    };

    renderEmployees();
})()
