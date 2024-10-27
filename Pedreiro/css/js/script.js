document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio real do formulário

    // Exibe a mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.classList.remove('sucesso-oculto');
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';

    // Limpa o formulário
    this.reset();
});
