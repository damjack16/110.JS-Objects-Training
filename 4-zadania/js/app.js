const book = {
    users: [],
    // Add user
    addUser(name, age, phone) {
        book.users.push({
            name: name,
            age: age,
            phone: phone,
        })
    },
    // Show all users
    showUsers() {
        console.log("Wszyscy użytkownicy w książce to:")
        for (const key in book.users) {
            console.log(book.users[key].name)
        }
    },
    // Show selected user
    findByName(name) {
        const selectedUser = this.users.some(x => x.name === name);
        if (selectedUser === true) {
            console.log(`Szukany użytkownik to ${name}`)
        } else {
            console.log("Nie ma takiego imienia w bazie")
        }
    },
    // Show user by selected phone
    findByPhone(phone) {
        const selectedPhone = this.users.find(x => x.phone === phone);
        if (typeof selectedPhone === 'object') {
            console.log(`Użytkownik z numerem telefonu ${phone} to ${selectedPhone.name}`)
        } else {
            console.log(`Nie ma użytkownika z numerem telefonu ${phone}`)
        }
    },
    // Show numbers of users
    getCount() {
        console.log(`Liczba użytkowników w bazie to ${this.users.length}`);
    },
}

book.addUser('Damian', 27, '987-654-321');
book.addUser('Heniek', 51, '123-456-789');
book.showUsers();
book.findByName("Damian");
book.findByPhone("421-515-512");
book.getCount();