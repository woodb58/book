function Book(name, author, pages) {
    this.name = name,
    this.author = author,
    this.pages = pages
    this.bookInfo = function(){
        return{
           name: this.name,
           author: this.author,
            pages: this.pages
        }
    }
}

const theHobbit = new Book("hobbit", "jrr", 508)

