const currentUser = {
    name: "Damian",
    surname: "Jackiewicz",
    email: "damian.jackiewicz92@gmail.com",
    www: "http://jackiewicz.pl",
    userType: "Premium",
    show() {
        console.log(`Imię: ${this.name}`);
        console.log(`Nazwisko: ${this.surname}`);
        console.log(`Email: ${this.email}`);
        console.log(`Strona WWW: ${this.www}`);
        console.log(`Typ użytkownika: ${this.userType}`);
    }
}

currentUser.show();