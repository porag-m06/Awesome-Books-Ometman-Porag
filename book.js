function addBks(title, author) {
    this.title = title;
    this.author = author;
}

// const showBks = document.querySelector('#show-Bks');
// const bkTitle = document.querySelector('#bk-title');
// const bkAuthor = document.querySelector('#bk-author');
const newBk = document.querySelector('#new-bk');

// const bksObj = new addBks(bkTitle, bkAuthor);
//const bksObj = new addBks('bkTitle', 'bkAuthor');
// console.log(bksObj.title)
// const bksObj = new addBks(bkTitle.value, bkAuthor.value)

newBk.addEventListener('submit', (e) => {
    e.preventDefault();
    const bkTitle = document.querySelector('#bk-title').value;
    const bkAuthor = document.querySelector('#bk-author').value;
    const bksObj = new addBks(bkTitle, bkAuthor)
    //  console.log(bksObj)
    const addedBk = document.createElement('div');
    addedBk.classList.add('added-bks');
    addedBk.innerHTML = `
            <p class="title">
                <!--book tile-->
                ${bksObj.title}
                </p>
                <p class="author">
                <!--book author-->
                ${bksObj.author}
                </p> 
                <button id="del-bk">Remove</button>`
    const showBks = document.querySelector('#show-bks');
    showBks.appendChild(addedBk);
})

// preserve data in local storage

//set data
const bkTitle = document.querySelector('#bk-title');
const bkAuthor = document.querySelector('#bk-author');
const userBkInputs = [bkTitle, bkAuthor]
console.log(userBkInputs)
const userBkData = {bktitle: '', bkauthor: ''}

const setUserBkData = localStorage.setItem('userBkData', JSON.stringify(userBkData));

userBkInputs.forEach((input) => {
    input.addEventListener(('change', () => {
       // e.preventDefault();
        userBkData.bktitle = bkTitle.value;
        userBkData.bkauthor = bkAuthor.value;
        localStorage.setItem('userBkData', JSON.stringify(userBkData));
        
    }))
});

//set data
const getUserBkData = localStorage.getItem(JSON.parse(setUserBkData));

//



