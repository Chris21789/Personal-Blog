const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const blogForm = document.getElementById('blogForm')

blogForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleValue = title.value;
    const usernameValue = username.value;
    const contentValue = content.value;

    const blogPost = {
        username: usernameValue,
        title: titleValue,
        content: contentValue
    }

    localStorage.setItem('blogPost', JSON.stringify(blogPost));

    window.location.assign("./blog.html");
});
