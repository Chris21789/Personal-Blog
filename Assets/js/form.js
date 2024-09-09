const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const blogFormEl = document.getElementById("blogForm");
const msgDiv = document.getElementById("msg");

console.log(JSON.parse(localStorage.getItem('blogPost')));

let posts = [];
console.log(posts);

function errorMsg(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

blogForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (localStorage.getItem("blogPost") !== null) {
    const storedPosts = (JSON.parse(localStorage.getItem('blogPost')));
    posts = storedPosts;
  }

  const titleValue = titleEl.value;
  const usernameValue = usernameEl.value;
  const contentValue = contentEl.value;

  if (usernameValue === "") {
    errorMsg("error", "Username cannot be blank");
  } else if (titleValue === "") {
    errorMsg("error", "Title cannot be blank");
  } else if (contentValue === "") {
    errorMsg("error", "Content cannot be blank");
  } else {
    const blogPost = {
      username: usernameValue,
      title: titleValue,
      content: contentValue,
    };

    posts.push(blogPost);

    localStorage.setItem("blogPost", JSON.stringify(posts));

    window.location.assign("./blog.html");
  }
});