let group = {
    title: 'teaching',
    students: ['first', 'second', 'third', 'fourth'],

    showList() {
        this.students.forEach((student) => {
            console.log(this.title, student);
        })
    }
}

group.showList();
