function abc() {
    let x = 20;

     function xyz() {
        console.log(this.x);
    }

    xyz();
}

abc();
