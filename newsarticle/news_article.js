// Step 3: Defining object and variables for XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = './news_article.json'; // Link para o arquivo JSON

// Step 4: URL definition and request set up
xhr.open('GET', url, true); // Configurando o método GET de forma assíncrona

// Step 5: Response type specification
xhr.responseType = 'json'; // Informando que o retorno será em formato JSON

// Step 6: Handling the 'onload' event
xhr.onload = function() {
    if (xhr.status === 200) { // Verifica se o request foi bem sucedido
        var articles = xhr.response.articles; // Obtendo os artigos do JSON
        var articlesDiv = document.getElementById('articles'); // Selecionando o elemento HTML onde o conteúdo será exibido

        // Iterando pelos artigos e construindo o HTML dinamicamente
        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv); // Adicionando o artigo ao div principal
        });
    } else {
        console.error('Failed to load news articles:', xhr.statusText);
    }
};

// Step 8: Sending the request
xhr.send();
