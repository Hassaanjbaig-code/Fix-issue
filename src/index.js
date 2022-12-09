import './style/main.css';
import todocon from './modules/app.js'

const input = document.getElementById('gettext');

let todo = new todocon()

input.addEventListener('change', (e) => {
  todo.add(input.value,true);
  // todo.addto(input.value,true);
  e.preventDefault();
  input.value = ""; 
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('listBook', JSON.stringify(todo.collection));
});

if (window.localStorage.getItem('listBook') !== 'undefined') {
  const list = JSON.parse(window.localStorage.getItem('listBook'));
  list.forEach((collection) => {
    todo.add(collection.title);
  });
}