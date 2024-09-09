const blogEntries = document.querySelector('#blogEntries');

const entries = [];

function renderEntries() {
    blogEntries.innerHTML = '';
    
    for (let i = 0; i < entries.length; i++) {
        console.log(entries[i]);
        const entry = entries[i];
        console.log(entry[0].username);
        const li = document.createElement('li');
        li.textContent = `${entry[i].title}${entry[i].content}${entry[i].username}`;
        li.setAttribute('data-index', i);

        blogEntries.appendChild(li);
    }
};

function init() {
    const storedEntries = JSON.parse(localStorage.getItem('blogPost'));
    console.log(storedEntries[0].content);
    if (storedEntries !== null) {
        entries.push(storedEntries);
    }
    console.log(entries);
    renderEntries();
};

init();