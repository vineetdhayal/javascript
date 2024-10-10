const personA = {
    name: "Ram",
    showName() {
        console.log(this.name);
    },
};

const personB = {
    name: "Laxman",
    showName: personA.showName,
    showBrotherName: () => {
        console.log(this);
        return personA.showName()
    },
    directlyShowBroName() {
        personA.showName();
    },
};

personB.showName(); //laxman
personB.showBrotherName(); // Ram
personB.directlyShowBroName(); //Ram
