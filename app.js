const textArea = document.getElementById('textarea');
const button = document.getElementById('count');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    if (textArea.value === '') {
        output.innerHTML = 'please enter some text'
    }
    else {
        const val = textArea.value;
        let count = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i] === 'a' || val[i] === 'e' || val[i] === 'i' || val[i] === 'o' || val[i] === 'u'|| val[i] === 'A' || val[i] === 'E' || val[i] === 'I' || val[i] === 'O' || val[i] === 'U')
                count++;
        }
        output.innerHTML = `the Number of Vowels are ${count}`;
    }
})