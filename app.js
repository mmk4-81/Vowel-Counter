const textArea = document.getElementById('textarea');
const button = document.getElementById('count');
const output = document.getElementById('output');

button.addEventListener('click',()=>{
    if(textArea.value === ''){
        output.innerHTML = 'please enter some text'
    }
   
})