/* eslint-disable no-use-before-define */

showBks = document.querySelector('#show-bks');
newBk = document.querySelector('#new-bk');

class booksClass {
  bookCollection = JSON.parse(localStorage.getItem('Books')) || [];

  constructor(bookTitle, bookAuthor) {
      this.title = bookTitle,
          this.author = bookAuthor
  }

  AddBook() {
    let title = this.title;
    let author = this.author;
      this.bookCollection.push({title, author}) ;
      localStorage.setItem('Books', JSON.stringify(this.bookCollection));
  }

  ShowAllBooks() {
      showBks.innerHTML = '';
console.log(this.bookCollection)
      for (let i = 0; i < this.bookCollection.length; i += 1) {
          const addedBk = document.createElement('div');
          addedBk.className = 'added-bks';
          addedBk.id = `${i}`;
          addedBk.innerHTML = `
              <p class="new-book-title">${this.bookCollection[i].title}</p>
              <p class="new-book-author">${this.bookCollection[i].author}</p> 
              <button id="del-bk">Remove</button>`;
          showBks.appendChild(addedBk);
      }

      const removeBtns = document.querySelectorAll('.added-bks');
      this.removeBook(removeBtns);
  }// ShowAllBooks

  removeBook(removeBtns) {
      removeBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
              this.bookCollection.splice(btn.getAttribute('id'), 1);
              localStorage.setItem('Books', JSON.stringify(this.bookCollection));
              this.ShowAllBooks();
          });
      });
  }// removeBook
}


if (bookCollection.length > 0) {
  ShowAllBooks();
}

newBk.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('#bk-title').value;
  const bookAuthor = document.querySelector('#bk-author').value;
  const awesomeBooks = new booksClass(bookTitle, bookAuthor);
  awesomeBooks.AddBook();
  awesomeBooks.ShowAllBooks();
  newBk.reset();
});
