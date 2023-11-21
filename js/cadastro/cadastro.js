//Mascara para cpf no formato: 000.000.000-00
var cpf = document.getElementById('cpf');
mascaraCpf(cpf)
var celular = document.getElementById('celular');
mascaraTelCelular(celular)
var telefone = document.getElementById('telefone');
mascaraTelCelular(telefone)

function validarFormulario() {
  var nome = document.getElementById('nome').value;
  var nomeMaterno = document.getElementById('nomeMaterno').value;
  var endereco = document.getElementById('endereco').value;
  var email = document.getElementById('email').value;
  var dataNascimento = document.getElementById('dataNascimento').value;
  var genero = document.getElementById('genero').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmarSenha').value;
  var erros = [];

if (erros.length > 0) {
      exibirErros(erros);
      return false; // Impede o envio do formulário se houver erros
    }

// Validar o campo Nome
if (nome.length < 3 || nome.length > 60 || !/^[a-zA-Z\s]+$/.test(nome)) {
  erros.push(  " * O campo Nome deve ter entre 3 e 60 caracteres alfabéticos.");
}

// Validar o campo Nome Materno
if (nomeMaterno.length < 3 || nomeMaterno.length > 60 || !/^[a-zA-Z\s]+$/.test(nomeMaterno)) {
  erros.push(" * O campo Nome Materno deve ter entre 3 e 60 caracteres alfabéticos.");
}

// Validar o campo Endereço
if (endereco.trim() === '') {
  erros.push(" * O campo Endereço é obrigatório.");
}

// Validar o campo Celular
if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(celular.value)) {
  erros.push(" * O campo celular deve estar no formato (00) 00000-0000.");
}

// Validar o campo E-mail
if (email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  erros.push(" * O campo E-mail não é válido.");
}


// Validar o campo Senha
if (senha.length < 6 || senha.length > 20) {
  erros.push(" * A senha deve ter entre 6 e 20 caracteres.");
}

// Validar a confirmação de Senha
if (senha !== confirmarSenha) {
  erros.push(" * A confirmação de senha não coincide.");
}



// Exibir erros, se houver algum
if (erros.length > 0) {
  exibirErros(erros);
  return false; // Impede o envio do formulário se houver erros
}

// Continua com o envio do formulário se a validação for bem-sucedida
return true;
}


function exibirErros(erros) {
var ul = document.createElement('ul');
erros.forEach(function(erro) {
  var li = document.createElement('li');
  li.textContent = erro;
  ul.appendChild(li);
});

// Limpar erros anteriores, se houver algum
var errosAnteriores = document.querySelector('ul');
if (errosAnteriores) {
  errosAnteriores.remove();
}

// Adicionar a lista de erros ao corpo do documento
document.body.appendChild(ul);
}