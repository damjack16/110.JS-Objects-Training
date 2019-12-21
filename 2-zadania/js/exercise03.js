const book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pageCount: 315,
    publisher: "Bloomsbury Publishing",
    showDetails() {
        for (const key in book) {
            if (key !== 'showDetails') {
                console.log("Klucz:", key);
                console.log("Wartość:", book[key]);
            }
        }
    }
}
book.showDetails()