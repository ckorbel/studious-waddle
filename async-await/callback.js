const posts = [
  {title: 'Post One', body: 'this is post one'},
  {title: 'Post Two', body: 'this is post two'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    post.push(post);
  }, 2000);

}

getPosts();
