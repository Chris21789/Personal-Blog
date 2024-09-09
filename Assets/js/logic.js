const themeSwitcher = document.querySelector('#mode');
const container = document.querySelector('.container');

let mode = 'light';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        console.log('light');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light');
        console.log('dark');
    }
});