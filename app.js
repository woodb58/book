const myLibrary = [];

function Book(name, author, pages, id) {
  this.name = name, 
  this.author = author, 
  this.pages = pages,
  this.id = crypto.randomUUID();
  this.bookInfo = function () {
    return {
      name: this.name,
      author: this.author,
      pages: this.pages,
    };
  };
}

function addBook(name, author, pages, id) {
  const newBook = new Book(name, author, pages, id);
  myLibrary.push(newBook);
}

addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);
addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);
addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);
addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);
addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);
addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);
addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);
addBook("Hobbit", "JRR", 8526);
addBook("GOT", "George", 1526);


const bookContainer = document.querySelector(".book-container");

renderLibrary = () => {
    bookContainer.innerHTML = "";

    myLibrary.forEach((book) => {
        const{name, author, pages} = book.bookInfo();

        const card = document.createElement("div");
        card.classList.add('book-card');

        const titleEl = document.createElement("h2");
        titleEl.innerText = name;

        const authorEl = document.createElement("h2");
        authorEl.innerText = author;

        const pagesEl = document.createElement('h2');
        pagesEl.innerText = pages

        card.appendChild(titleEl)
        card.appendChild(authorEl)
        card.appendChild(pagesEl)

        bookContainer.appendChild(card)

    })
}

renderLibrary()