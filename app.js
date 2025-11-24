const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

Book.prototype.bookInfo = function () {
  return {
    name: this.name,
    author: this.author,
    pages: this.pages,
    id: this.id,
  };
};

function addBook(name, author, pages) {
  const newBook = new Book(name, author, pages);
  myLibrary.push(newBook);
}

function deleteBook(id) {
  const idx = myLibrary.findIndex((b) => b.id === id);
  if (idx !== -1) {
    myLibrary.splice(idx, 1);
  }
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
const openDialogBtn = document.querySelector("#open-dialog-btn");
const bookDialog = document.querySelector("#book-dialog");
const cancelDialogBtn = document.querySelector("#cancel-dialog-btn");
const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Grab values (trim to clean user input)
  const title = document.querySelector("#book-title").value.trim();
  const author = document.querySelector("#book-author").value.trim();
  const pagesRaw = document.querySelector("#book-pages").value.trim();

  // Basic validation beyond 'required' attributes
  const pages = parseInt(pagesRaw, 10);
  if (!title || !author || !Number.isFinite(pages) || pages <= 0) {
    return;
  }

  // Add new book to the library
  addBook(title, author, pages);

  // Re-render the library grid
  renderLibrary();

  // Reset form & close modal
  bookForm.reset();
  bookDialog.close();
});

openDialogBtn.addEventListener("click", () => {
  bookForm.reset();
  bookDialog.showModal();
  const titleInput = document.querySelector("#book-title");
  requestAnimationFrame(() => titleInput.focus());
});

cancelDialogBtn.addEventListener("click", () => {
  bookDialog.close();
});

bookDialog.addEventListener("click", (e) => {
  if (e.target === bookDialog) {
    bookDialog.close();
  }
});

const renderLibrary = () => {
  bookContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const { name, author, pages, id } = book.bookInfo();

    const card = document.createElement("div");
    card.classList.add("book-card");

    const titleEl = document.createElement("h2");
    titleEl.innerText = name;

    const authorEl = document.createElement("p");
    authorEl.innerText = author;

    const pagesEl = document.createElement("h3");
    pagesEl.innerText = pages;

    const actions = document.createElement("div");
    actions.classList.add("card-actions");

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.dataset.id = id;
    deleteBtn.setAttribute("aria-label", `Delete ${name}`);
    deleteBtn.textContent = "Delete";

    actions.appendChild(deleteBtn);

    card.appendChild(titleEl);
    card.appendChild(authorEl);
    card.appendChild(pagesEl);
    card.appendChild(actions);

    bookContainer.appendChild(card);
  });
};

bookContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".delete-btn");
  if (!btn) return;
  deleteBook(btn.dataset.id);
  renderLibrary();
});

renderLibrary();
