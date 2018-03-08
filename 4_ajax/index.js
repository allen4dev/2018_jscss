const Ajax = (function() {
  let btnFetch = document.getElementById('button-fetch');
  let articles = document.querySelector('.Articles');

  function fetchArticles() {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(data => {
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
      })
      .catch(console.error);
  }

  function init() {
    btnFetch.addEventListener('click', fetchArticles);
  }

  return {
    init,
  };
})();
