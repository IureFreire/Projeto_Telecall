// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Adicione um ouvinte de evento para alternar o modo ao clicar no botão
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', toggleDarkMode);


