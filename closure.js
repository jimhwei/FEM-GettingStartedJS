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
	}
  addFavoriteBook(bookName) {
  	if (!bookName.includes("Great")) {
  		this.favoriteBooks.push(bookName);
  	}
  }

  function printFavoriteBooks() {
  	console.log(`Favorite Books: ${ String(this.favoriteBooks.length) }`); //string coercion makes you more aware about your types
  	for (let bookName of favoriteBooks) {
  		console.log(this.bookName);
  	}
  }
}

// The param is just a placeholder
function loadBooks(theBookshelf) {
  // Need an inline named function
	fakeAjax(BOOK_API, function onBooks(bookNames){
    for (let bookName of bookNames) {
      theBookshelf.addFavoriteBook(bookName); //invoking in a diff context
    }
    theBookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf()
loadBooks(myBooks)

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
