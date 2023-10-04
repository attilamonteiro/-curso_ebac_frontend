function enviarFormulario() {
    // Lógica de envio do formulário aqui
    // Você pode acessar os valores dos campos usando document.getElementById
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    // Exemplo de exibição dos valores no console
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Telefone:', telefone);

    // Adicione aqui a lógica para enviar os dados para o servidor, se necessário
}
