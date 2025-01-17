class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.status = "available";
    this.dueDate = null;
  }
  borrow() {
    if (this.status === "available") {
      this.status = "borrowed";
      this.dueDate = new Date();
      this.dueDate.setDate(this.dueDate.getDate() + 14);
      console.log(`The book '${this.title}' has been borrowed.`);
    } else {
      console.log(`The book '${this.title}' is currently unavailable.`);
    }
  }
  returnBook() {
    if (this.status === "borrowed") {
      const overdueDays = Math.max(
        0,
        Math.floor((new Date() - this.dueDate) / (1000 * 60 * 60 * 24))
      );
      this.status = "available";
      this.dueDate = null;
      console.log(
        overdueDays > 0
          ? `The book '${this.title}' is returned late. Fine: $${overdueDays}`
          : `The book '${this.title}' has been returned on time.`
      );
    } else {
      console.log(`The book '${this.title}' was not borrowed.`);
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book '${book.title}' added to the library.`);
  }

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Book '${title}' removed from the library.`);
    } else {
      console.log(`Book '${title}' not found.`);
    }
  }

  searchBooks(query) {
    const results = this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length > 0) {
      results.forEach((book) => {
        console.log(
          `Found: '${book.title}' by ${book.author} - Status: ${book.status}`
        );
      });
    } else {
      console.log(`No books found for '${query}'.`);
    }
  }
}

const library = new Library();
const book1 = new Book("Book1", "Author1");
const book2 = new Book("Book2", "Author2");
const book3 = new Book("Book3", "Author3");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.searchBooks("Book1");
book1.borrow();
book1.returnBook();
library.removeBook("Book2");
