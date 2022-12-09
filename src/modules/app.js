import todocon from './class.js'
import icon from '../assets/icons8-remove-64.png'
import { id } from 'prelude-ls';

let count = 0;

export default class todoc {
    constructor(){
        this.collection = []
    }
    add(title,complete,id = this.collection.length+1) {
        const struction = new todocon(title,complete,id);
        this.collection.push(struction);
        console.log(this.collection);
        this.addto(struction);
    }
    addto(struction){
        // const itemid = count;
       const Listtodo = document.getElementById('listtodo');
       const main = document.createElement('li');
       main.classList.add('projectli');
       main.id = struction.id;
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.completed = struction.complete;
       const maintext = document.createElement('input');
       maintext.value = struction.title;
       maintext.setAttribute('readOnly','readOnly');
       maintext.classList.add('text-area')
       const icondelete = document.createElement('img');
       icondelete.alt = 'Delete';
       icondelete.src = icon;
       icondelete.classList.add("delete");
       //    For edit the text area 
       maintext.addEventListener('click', () => {
            maintext.removeAttribute('readOnly');
            maintext.classList.add('border');
            maintext.focus();
        });
        maintext.addEventListener('change', e => {
            // console.log(e.target.value);
            maintext.setAttribute('readOnly','readOnly');
            maintext.classList.remove('border');
           const { id } = e.currentTarget.parentElement.parentElement;
           e.target.value = maintext.value;
           console.log(e.currentTarget.parentElement);
           this.collection[id].title = e.currentTarget.value;
           console.log(this.collection);
     });
       main.append(
         checkbox,
         maintext,
         icondelete,
       );
       Listtodo.appendChild(main);
    //    For the remove 
       icondelete.addEventListener('click', () => {
           Listtodo.removeChild(main);
        this.remove(struction.id);
       })
    }
    remove(id){
        this.collection = this.collection.filter((task) => task.id !== this.collection[id - 1].id);
        this.updateid()
    }
    updateid(){
       for (let i = 0; i < this.collection.length; i++) {
        this.collection[i].id = i + 1
       }
    }
}