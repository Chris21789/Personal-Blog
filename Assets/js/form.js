const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const blogFormEl = document.getElementById('blogForm')

blogForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleValue = titleEl.value;
    const usernameValue = usernameEl.value;
    const contentValue = contentEl.value;

    const blogPost = {
        username: usernameValue,
        title: titleValue,
        content: contentValue
    }

    localStorage.setItem('blogPost', JSON.stringify(blogPost));

    window.location.assign("./blog.html");
});

