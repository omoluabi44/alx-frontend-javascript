interface Student{
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname:'emmanuel',
    lastname:'ogunleye',
    age:20,
    location:'new-york'
};
const student2: Student = {
    firstname:'bolu',
    lastname:'ajayi',
    age:24,
    location:'new-york'
};

const studentsList: Student[] =[];
studentsList.push(student1);
studentsList.push(student2);

const table = document.createElement('table');
const tBody = document.createElement('tbody')


table.style.background = "pink";
table.appendChild(tBody);

studentsList.forEach((student:Student): void =>{
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstname;
    locationCell.textContent = student.location;

    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tBody.appendChild(row);

});
document.body.appendChild(table);
