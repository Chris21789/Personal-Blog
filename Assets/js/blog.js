const blogEntries = document.querySelector('#blogEntries');

const entries = JSON.parse(localStorage.getItem('blogPost'));

function renderEntries() {
    blogEntries.innerHTML = '';
    
    for (let i = 0; i < entries.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${entries[i].title}${entries[i].content}${entries[i].username}`;
        li.setAttribute('data-index', i);

        blogEntries.appendChild(li);
    }
};

renderEntries();