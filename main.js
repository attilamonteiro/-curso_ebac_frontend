document.addEventListener('DOMContentLoaded', function () {
    // URL da API do GitHub
    const apiUrl = 'https://api.github.com/users/ogiansouza';

    // Função para preencher os dados no HTML
    function fillData(data) {
        document.getElementById('reposCount').textContent = data.public_repos;
        document.getElementById('followersCount').textContent = data.followers;
        document.getElementById('followingCount').textContent = data.following;
        document.getElementById('githubLink').href = data.html_url;
        document.getElementById('avatar').src = data.avatar_url;
    }

    // Fazer requisição para a API do GitHub
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => fillData(data))
        .catch(error => console.error('Erro ao obter dados do GitHub:', error));
});
