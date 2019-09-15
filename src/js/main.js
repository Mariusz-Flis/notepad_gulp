console.log(`Hello world!`);



const notepadTextfield = document.querySelector('.notepad_textfield--js');
const load = document.querySelector('.notepad__button1--load-js');
const save = document.querySelector('.notepad__button2--save-js');

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('notepadTextfield', notepadTextfield.value);
})
load.addEventListener('click', (e) => {
    e.preventDefault();
    notepadTextfield.value = localStorage.getItem('notepadTextfield');
})