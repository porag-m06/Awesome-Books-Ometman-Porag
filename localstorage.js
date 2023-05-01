
const bkTitle = document.querySelector('#bk-title');
const bkAuthor = document.querySelector('#bk-author');
const addBk = document.querySelector('#add-bk');
const newBk = document.querySelector('#new-bk');
 console.log('bkTitle')
// create input array
const userInputs = [bkTitle, bkAuthor]

 //create empty user data object 
 let userBkData = { bktitle: '', bkauthor: '' };

addBk.addEventListener('click', () => {
    e.preventDefault();
  userBkData = { bktitle: bkTitle.value, bkauthor: bkAuthor.value }; // if not working check parameters
  //setting user input in local storage on submit
  localStorage.setItem('userBkData', JSON.stringify(userBkData));
});

// setting user input in local storage onload and change
window.addEventListener('load', () => {
    e.preventDefault();
    localStorage.setItem('userBkData', JSON.stringify(userBkData));
    // get and assigned the stored data into input elements
    const getUserBkData = localStorage.getItem(JSON.parse('userBkData'));
    bkTitle.value = getUserBkData.bktitle;
    bkAuthor.value = getUserBkData.bkauthor;
   
  });

userInputs.forEach((input) => {
  input.addEventListener('change', () => {
    userBkData = { bktitle: bkTitle, bkauthor: bkAuthor };
    localStorage.setItem('userBkData', JSON.stringify(userBkData));
    console.log(userBkData)
  });
});