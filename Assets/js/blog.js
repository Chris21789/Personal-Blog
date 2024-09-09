const blogEntries = document.querySelector('#blogEntries');

const entries = JSON.parse(localStorage.getItem('blogPost'));

function renderEntries() {
    blogEntries.innerHTML = '';
    
    for (let i = 0; i < entries.length; i++) {
        const li = document.createElement('li');
        const h1li = document.createElement('h1');
        const pli = document.createElement('p');
        const h3li = document.createElement('h3');
        h1li.textContent = `${entries[i].title}`;
        pli.textContent = `${entries[i].content}`;
        h3li.textContent = `Posted by: ${entries[i].username}`;
        li.setAttribute('data-index', i);

        li.appendChild(h1li);
        li.appendChild(pli);
        li.appendChild(h3li);
        blogEntries.appendChild(li);
    }
};

renderEntries();