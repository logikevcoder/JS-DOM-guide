// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype


// // Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// console.log(val);

// Replace Element

// Create Element
const newHeading = document.createElement('h2');

// Addd id
newHeading.id = 'task-title';

// New text node
newHeading .appendChild(document.createTextNode('Task List'));

// Get old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child Element
list.removeChild(lis[3]);


// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
// selecting the a link inside the first li element
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
// easy way to add and remove classes this way. 
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'google.com');
link.hasAttribute('href'); // true
val = link.setAttribute('title', 'google');
val = link.hasAttribute('title'); // true
link.removeAttribute('title');
val = link;

console.log(val);


console.log(newHeading);

// EVENT LISTENERS
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

// THESE ARE ALL BASED ON THE EVENT OBJECT in this case using e instead of event
function onClick(e) {
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // // Event type
  // val = e.type;

  // // Timestamp
  // val = e.timeStamp;

  // // Coords event relative to the window in pixels
  // val = e.clientY;
  // val = e.clientX;

  // // Coords event relative to the element in pixels
  
  // val = e.offsetY;
  // val = e.offsetX;

  console.log(val);
}

// MOUSE EVENT LISTENERS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// // Click
// clearBrn.addEventListener('click', runEvent);
// // Double Click
// clearBtn.addEventListener('dblclick', runEvent);
// // Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter only fires onces it enters
card.addEventListener('mouseenter', runEvent);
// Mouse Leave  only fires onces it leaves
card.addEventListener('mouseleave', runEvent);
// Mouse Over keeps firing when its over a target
card.addEventListener('mouseover', runEvent);
// Mouse out 
card.addEventListener('mouseout', runEvent);
// Mouse move good for gaming as it keeps tracking
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);


  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}