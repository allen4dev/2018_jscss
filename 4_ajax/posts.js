const Posts = (function() {
  let btnFetch;
  let form;
  let posts;

  function fetchPosts() {
    return axios
      .get('http://localhost:3000/posts')
      .then(res => res.data)
      .catch(console.error);
  }

  function fetchAndAppendPosts() {
    fetchPosts().then(appendPosts);
  }

  function makePost(post) {
    const article = `
      <article id="post-${post.id}" className="Post">
        <h2 className="Post-title">${post.title}</h2>
        <p className="Post-title">${post.body}</p>
      </article>
    `;

    return article;
  }

  function appendPosts(data) {
    let items = posts.innerHTML;

    data.forEach(element => {
      const post = makePost(element);

      items += post;
    });

    posts.innerHTML = items.trim();
  }

  function appendPost(post) {
    let items = posts.innerHTML;
    let newPost = makePost(post);

    items += newPost;

    posts.innerHTML = items.trim();
  }

  function savePost(post) {
    axios
      .post('http://localhost:3000/posts', post)
      .then(({ data }) => {
        form.reset();
        appendPost(data);
        return data;
      })
      .catch(console.error);
  }

  function submitForm(e) {
    e.preventDefault();

    const post = {
      title: e.target[0].value,
      body: e.target[1].value,
    };

    return savePost(post);
  }

  function init() {
    form = document.getElementById('form');
    posts = document.querySelector('.Posts');

    form.addEventListener('submit', submitForm);

    fetchAndAppendPosts();
  }

  return {
    init,
  };
})();
