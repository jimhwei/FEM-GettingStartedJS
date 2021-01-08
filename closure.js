function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

// Assigning the value what is closure
var myQuestion = ask("What is closure?");

// Still knows the ask content, because of "Closure" despite closure. Need to know more about closure. 
myQuestion();class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	};
  addFavoriteBook(bookName);
  printFavoriteBooks()

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
}

function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`Favorite Books: ${String(favoriteBooks.length)}`);
	for (let bookName of favoriteBooks) {
		console.log(this.bookName);
	}
}

function loadBooks(Bookshelf) {
	fakeAjax(BOOK_API,
          for (let i of cb) {
    console.log(bookName)
  });
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

new Bookshelf(Whatever)