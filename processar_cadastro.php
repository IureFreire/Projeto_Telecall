<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $data_nascimento = $_POST["data_nascimento"];
    $sexo = $_POST["sexo"];
    $nome_materno = $_POST["nome_materno"];
    $cpf = $_POST["cpf"];
    $telefone_celular = $_POST["telefone_celular"];
    $telefone_fixo = $_POST["telefone_fixo"];
    $endereco = $_POST["endereco"];
    $login = $_POST["login"];
    $senha = $_POST["senha"];
    $confirmar_senha = $_POST["confirmar_senha"];

    // Validações simples (você deve implementar validações mais robustas)
    if (empty($nome) || empty($data_nascimento) || empty($sexo) || empty($nome_materno) || empty($cpf) || empty($telefone_celular) || empty($endereco) || empty($login) || empty($senha) || empty($confirmar_senha) || $senha != $confirmar_senha) {
        echo "Preencha todos os campos corretamente. <a href='javascript:history.back()'>Voltar</a>";
    } else {
        // Processo de cadastro no banco de dados (não incluído aqui)
        echo "Cadastro realizado com sucesso!";
    }
}
?>
