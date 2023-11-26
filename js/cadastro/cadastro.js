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

/*validação do endereço*/
function endereçoValidate(){
  if(campos[2].value.length == 0){
    setError(2) 
  }else{
    removeError(2)
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