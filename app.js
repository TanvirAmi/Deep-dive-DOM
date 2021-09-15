const x = document.querySelector('#book-list li:nth-child(2) .name');
const books = document.querySelectorAll('#book-list li .name');

const book = Array.from(books);
//console.log(book);
book.forEach(function(item){
   //item.nextElementSibling.textContent = "Remove";
   //item.textContent = '<h2> Generated from app.js file</h2>';
   item.textContent += '(Title)';
   //console.log(item);
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML += '<p>This is how to add html</p>';

const hero = document.querySelector('.splash');
console.log('.splash node type is:', hero.nodeType);
console.log('.splash node name is:', hero.nodeName);
console.log('.splash node has child node:', hero.hasChildNodes());

const cloneHero = hero.cloneNode(true);
console.log(cloneHero);

//hero.innerHTML += cloneHero;

console.log('The Parent node of #book-list is:', bookList.parentNode);
const heading = document.querySelector('.title');
console.log('The Parent node of <h2 class="title"> is:', heading.parentNode);

console.log('The next sibling of #book-list is:', bookList.nextSibling);
console.log('The next element of #book-list is:', bookList.nextElementSibling);

//Add paragaph after in splash-subhead p tag
const joinP = bookList.previousElementSibling.querySelector('p');
joinP.innerHTML += '</br> Yes, You are getting your passion Back!';

const h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e){
   console.log(e.target);
   console.log(e);
});

// const btns = document.querySelectorAll('#book-list .delete');
// const del_task = Array.from(btns);
// del_task.forEach(function(btn){
//       btn.addEventListener('click', function(e){
//             //which element we have targated by click event & get it's parent
//             //(delete) to (li)
//             const li =  e.target.parentElement;
//             //console.log(li.textContent);
//             //Jump to the parent node(li) to (ul)
//             const x = li.parentNode;
//             //console.log(x);
//             //Remove the particualar (li) from the parent node(ul) 
//             x.removeChild(li);

//       });
// });

const link = document.querySelector('.splash a');
link.addEventListener('click', function(e){
   e.preventDefault();
   console.log('navigation to', e.target.textContent, 'is prevented');
});

const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
   const x = e.target.className;
   if( x == 'delete'){
      const y = e.target.parentElement;
      list.removeChild(y);
   }
});

const addFrom = document.forms['add-book'];
addFrom.addEventListener('submit', function(e){
   e.preventDefault();
   const value = addFrom.querySelector('input[type="text"]').value;
   //console.log(value);
   //create elements
   const li = document.createElement('li');
   const bookName = document.createElement('span');
   const deleteBtn = document.createElement('span');
   //Add classes in element
   li.classList.add('indv-book');
   bookName.classList.add('name');
   deleteBtn.classList.add('delete')
   //Add content and value
   deleteBtn.textContent = 'Delete';
   bookName.textContent = value;
   //append to document
   li.appendChild(bookName);
   li.appendChild(deleteBtn);
   list.appendChild(li);
});

//hide books
const hideBook = document.querySelector('#hide');
hideBook.addEventListener('change', function(e){
   if(hideBook.checked){
      list.style.display = "none";
   }
   else{
      list.style.display = "initial";
   }
})