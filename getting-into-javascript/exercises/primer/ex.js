// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName)
    }
}
// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    console.log(`There are ${favoriteBooks.length} in my list.`);
    for (let i = 0; i < favoriteBooks.length; i++) {
        console.log(favoriteBooks[i]);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks();