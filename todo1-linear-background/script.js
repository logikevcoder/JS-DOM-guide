let button = document.querySelector('button');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');
let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector ('.color2');
let body = document.querySelector('body');

setGradient = () => {
  body.style.background =
    'linear-gradient(to right, '
    + color1.value
    + ', '
    + color2.value
    + ')';

    css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener ('input', setGradient);

inputLength = () => {
  return input.value.length;
}

createEntry = () => {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
}

addItemAfterClick = () => {
  if (inputLength() > 0) {
    createEntry();
  }
}

addItemAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createEntry();
  }
}
button.addEventListener('click', addItemAfterClick);

input.addEventListener('keypress', addItemAfterKeypress);
