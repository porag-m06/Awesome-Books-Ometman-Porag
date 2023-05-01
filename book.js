/* eslint-disable no-use-before-define */
const bookCollection = [];
const showBks = document.querySelector('#show-bks');
const newBk = document.querySelector('#new-bk');

function AddBook(bookTitle, bookAuthor) {
  bookCollection.push({ title: bookTitle, author: bookAuthor });
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
  RemoveBook(removeBtns);
}// ShowAllBooks

function RemoveBook(removeBtns) {
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      bookCollection.splice(btn.getAttribute('id'), 1);
      ShowAllBooks();
    });
  });
}// removeBook

newBk.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('#bk-title').value;
  const bookAuthor = document.querySelector('#bk-author').value;
  AddBook(bookTitle, bookAuthor);
  ShowAllBooks();
});

// preserve data in local storage

// set data
// const bkTitle = document.querySelector('#bk-title');
// const bkAuthor = document.querySelector('#bk-author');
// const userBkInputs = [bkTitle, bkAuthor];
// // console.log(userBkInputs);
// const userBkData = { bktitle: '', bkauthor: '' };

// const setUserBkData = localStorage.setItem('userBkData', JSON.stringify(userBkData));

// userBkInputs.forEach((input) => {
//   input.addEventListener(('change', () => {
//     // e.preventDefault();
//     userBkData.bktitle = bkTitle.value;
//     userBkData.bkauthor = bkAuthor.value;
//     localStorage.setItem('userBkData', JSON.stringify(userBkData));
//   }));
// });

// set data
// const getUserBkData = localStorage.getItem(JSON.parse(setUserBkData));

//
