// get elements (rename variables)
const theTitle = document.querySelector('#bk-title');
const theAuthor = document.querySelector('#bk-author');
const addBook = document.querySelector('#add-bk');
const newBook = document.querySelector('#new-bk');
 
// create input array for live input changes
const userInputs = [theTitle, theAuthor]

//create empty user data object 
 let userBkData = { bktitle: '', bkauthor: '' };

addBook.addEventListener('click', () => {
   e.preventDefault();
  userBkData = { bktitle: theTitle.value, bkauthor: theAuthor.value };
  //setting user input in local storage on submit
  localStorage.setItem('userBkData', JSON.stringify(userBkData));
 });

// // setting user input in local storage onload and change
window.addEventListener('load', () => {
    // get and assigned the stored data into input elements
    const getUserBkData = JSON.parse(localStorage.getItem('userBkData'));
    theTitle.value = getUserBkData.bktitle;
    theAuthor.value = getUserBkData.bkauthor;
  });

  // get changes in input into local storage
userInputs.forEach((input) => {
  input.addEventListener('change', () => {
    userBkData = { bktitle: theTitle.value, bkauthor: theAuthor.value };
    localStorage.setItem('userBkData', JSON.stringify(userBkData));
  });
});