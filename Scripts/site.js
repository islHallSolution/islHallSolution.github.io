// Obtém o elemento do botão de alternância
const modeToggle = document.getElementById('mode-toggle');

// Obtém o elemento do corpo
const body = document.body;
const navbar = document.getElementById('navbar');

// Adiciona um evento de clique ao botão de alternância
modeToggle.addEventListener('click', function () {
    // Alterna a classe do corpo entre dark-mode e light-mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('bg-dark');
    modeToggle.classList.toggle('bg-light');
    modeToggle.classList.toggle('bg-dark');
});