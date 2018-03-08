const Ajax = (function() {
  let btnFetch;
  let articles;

  function fetchArticles() {
    return fetch('http://localhost:3000/items')
      .then(res => res.json())
      .catch(console.error);
  }

  function appendArticles(data) {
    let items = '';

    data.forEach(element => {
      const article = `
          <article id="article-${element.id}" className="Article">
            <h2 className="Article-title">${element.title}</h2>
            <p className="Article-title">${element.body}</p>
          </article>
        `;

      items += article;
    });

    articles.innerHTML = items;
  }

  function fetchAndAppend() {
    fetchArticles().then(appendArticles);
  }

  function init() {
    btnFetch = document.getElementById('button-fetch');
    articles = document.querySelector('.Articles');

    btnFetch.addEventListener('click', fetchAndAppend);
  }

  return {
    init,
  };
})();
