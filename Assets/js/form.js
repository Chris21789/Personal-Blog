const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const blogFormEl = document.getElementById("blogForm");
const msgDiv = document.getElementById("msg")

function errorMsg(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}


blogForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleValue = titleEl.value;
  const usernameValue = usernameEl.value;
  const contentValue = contentEl.value;
  
  if (usernameValue === "") {
    errorMsg('error', 'Username cannot be blank');
  } else if (titleValue === "") {
    errorMsg('error', 'Title cannot be blank');
  } else if (contentValue === "") {
    errorMsg('error', 'Content cannot be blank');
  } else {
    const blogPost = {
      username: usernameValue,
      title: titleValue,
      content: contentValue,
    };

    localStorage.setItem("blogPost", JSON.stringify(blogPost));

    window.location.assign("./blog.html");
  }
});
