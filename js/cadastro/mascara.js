function mascaraCpf(cpf) {
  cpf.addEventListener("change", function () {
    if (cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/, "-");
  });
}

function mascaraTelCelular(divElemento) {
  divElemento.addEventListener("change", function () {
    if (!divElemento.value) return false
    divElemento.value = divElemento.value.replace(/\D/g, '')
    divElemento.value = divElemento.value.replace(/(\d{2})(\d)/, "($1) $2")
    divElemento.value = divElemento.value.replace(/(\d)(\d{4})$/, "$1-$2")
  });
}