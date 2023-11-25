//Criação das vars para chamada da function mascara
const cpf = document.getElementById('cpf');
mascaraCpf(cpf)
const celular = document.getElementById('celular');
mascaraTelCelular(celular)
const telefone = document.getElementById('telefone');
mascaraTelCelular(telefone)

const form  = document.getElementById('formularioCadastro')
const campos = document.querySelectorAll('.required')
const spans  = document.querySelectorAll('.span-required')
const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

/*Function "INVALIDO" */
function setError(index){
  campos[index].style.border = '1px solid #e63636';
  spans[index].style.display = "flex"
}
/*Function "VALIDO" */
function removeError(index){
  campos[index].style.border = '';
  spans[index].style.display = "none"
}
/*ERRO*/ 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  nomeValidate();
  nomeMaternoValidate();
  endereçoValidate()
  celValidate();
  emailValidate();
  telValidate();
  cpfValidate();
  generovalidate();
  senhaValidate();
  comfirmacaoDeSenha();
  nascimentoValidate();

});

/*validação do nome*/
function nomeValidate(){
  if(campos[0].value.length < 3){
    setError(0)
  }else{
    removeError(0)
  }
}

/*validação do nome materno*/
function nomeMaternoValidate(){
  if(campos[1].value.length < 3){
    setError(1)
  }else{
    removeError(1)
  }
}

/*validação do nome*/
function endereçoValidate(){
  if(campos[2].value.length == 0){
    setError(0)
  }else{
    removeError(0)
  }
}
/*validação da Celular*/
function celValidate(){
  if(campos[3].value.length == 11){
    removeError(3)
  }else{
    setError(3)
    
  }
}

/*validação da data do email*/
function emailValidate(){
  const email = campos[4]
  if(emailRegex.test(email.value)){
    removeError(4)
  }else{
  setError(4)
  }
}

/*Validação do telefone*/
function telValidate(){
  if(campos[5].value.length < 10){
    setError(5)
  }else{
    removeError(5)
  }
}

/*validação da data do Cpf*/
function cpfValidate(){
  if(campos[6].value.length < 11 || campos[6].value.length == 0){
    setError(6)
  }else{
    removeError(6)
  }
}

/*validação da data de nascimento*/
function nascimentoValidate(){
  if(campos[7].value.length == 0){
    setError(7)
    
  }else{
    removeError(7)
  }
}


/*Validação do gênero*/
function generovalidate(){
  const genero = campos[8]
  if(genero.value == genero[0].value){
    setError(8)
  }else{
    removeError(8)
  }
}


/*validação de senha*/
function senhaValidate(){
  if(campos[9].value.length <= 6 || campos[9].value.length > 20){
    setError(9)
  }else{
    removeError(9)
  }
}

/*Confirmação senha*/
function comfirmacaoDeSenha(){
  if(campos[10].value.length !== campos[9].value.length || campos[10].value.length == 0){
    setError(10)
  }else{
    removeError(10)
  }
}








































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
  erros.push("* O campo Endereço é obrigatório.");
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