/* eslint-disable no-use-before-define */
const bookCollection = JSON.parse(localStorage.getItem('Books')) || [];
const showBks = document.querySelector('#show-bks');
const newBk = document.querySelector('#new-bk');

function AddBook(bookTitle, bookAuthor) {
  bookCollection.push({ title: bookTitle, author: bookAuthor });
  localStorage.setItem('Books', JSON.stringify(bookCollection));
}// AddBook

function ShowAllBooks() {
  showBks.innerHTML = '';

  for (let i = 0; i < bookCollection.length; i += 1) {
    const addedBk = document.createElement('div');
    addedBk.className = 'added-bks';
    addedBk.id = `${i}`;
    addedBk.innerHTML = `
            <p class="title">${bookCollection[i].title}</p>
            <p class="author">${bookCollection[i].author}</p> 
            <button id="del-bk">Remove</button>`;
    showBks.appendChild(addedBk);
  }

  const removeBtns = document.querySelectorAll('.added-bks');
  removeBook(removeBtns);
}// ShowAllBooks

function removeBook(removeBtns) {
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      bookCollection.splice(btn.getAttribute('id'), 1);
      localStorage.setItem('Books', JSON.stringify(bookCollection));
      ShowAllBooks();
    });
  });
}// removeBook

if (bookCollection.length > 0) {
  ShowAllBooks();
}

newBk.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('#bk-title').value;
  const bookAuthor = document.querySelector('#bk-author').value;
  AddBook(bookTitle, bookAuthor);
  ShowAllBooks();
  newBk.reset();
});
