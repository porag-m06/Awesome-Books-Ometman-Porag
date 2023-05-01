//  declare a constructor function for data collection
function AddBks(title, author) {
  this.title = title;
  this.author = author;
}

const showBks = document.querySelector('#show-Bks');
const newBk = document.querySelector('#new-bk');

 // create event to add book on submit and set local storage data with input values
newBk.addEventListener('submit', (e) => {
  e.preventDefault();
  const bkTitle = document.querySelector('#bk-title').value;
  const bkAuthor = document.querySelector('#bk-author').value;
  const bksObj = new AddBks(bkTitle, bkAuthor);
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
                <button id="del-bk">Remove</button>`;
  const showBks = document.querySelector('#show-bks');
  showBks.appendChild(addedBk);
});