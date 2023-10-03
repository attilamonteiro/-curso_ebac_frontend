// Aplicar máscaras aos campos usando o jQuery Mask Plugin
$(document).ready(function(){
    // Máscara para o telefone
    $('#telefone').mask('(00) 00000-0000');

    // Máscara para o CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});

    // Máscara para o CEP
    $('#cep').mask('00000-000');
});

// Você pode adicionar aqui um código para lidar com o envio do formulário
$('#cadastroForm').submit(function(e){
    e.preventDefault();
    // Adicione aqui o código para lidar com o envio do formulário, por exemplo, enviar para o servidor.
    console.log('Formulário enviado!');
});
