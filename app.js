const myLibrary = [];

function Book(name, author, pages, id) {
    this.name = name,
    this.author = author,
    this.pages = pages
    this.id = crypto.randomUUID()
    this.bookInfo = function(){
        return{
           name: this.name,
           author: this.author,
            pages: this.pages
        }
    }
}

function addBook(name, author, pages, id){
    const newBook = new Book(name, author, pages, id);
    myLibrary.push(newBook);

}

addBook("Hobbit", 'JRR', 8526);
addBook("GOT", 'George', 1526);

console.log(myLibrary)

