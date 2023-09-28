
        function validarCadastro() {
            var nome = document.getElementById("nome").value;
            var dataNascimento = document.getElementById("data_nascimento").value;
            var sexo = document.querySelector('input[name="sexo"]:checked');
            var nomeMaterno = document.getElementById("nome_materno").value;
            var cpf = document.getElementById("cpf").value;
            var telefoneCelular = document.getElementById("telefone_celular").value;
            var telefoneFixo = document.getElementById("telefone_fixo").value;
            var endereco = document.getElementById("endereco").value;
            var login = document.getElementById("login").value;
            var senha = document.getElementById("senha").value;
            var confirmarSenha = document.getElementById("confirmar_senha").value;

            // Validação do Nome
            if (nome.length < 15 || nome.length > 60 || !/^[a-zA-Z\s]+$/.test(nome)) {
                alert("O campo Nome deve ter entre 15 e 60 caracteres alfabéticos.");
                return false;
            }

            // Validação da Data de Nascimento (você pode adicionar regras específicas aqui)
            if (!dataNascimento) {
                alert("Informe a Data de Nascimento.");
                return false;
            }

            // Validação do Sexo
            if (!sexo) {
                alert("Selecione o Sexo.");
                return false;
            }

            // Validação do Nome Materno
            if (nomeMaterno.length === 0) {
                alert("Informe o Nome Materno.");
                return false;
            }

            // Validação do CPF (você pode adicionar uma validação mais rigorosa)
            if (cpf.length !== 14) {
                alert("Informe um CPF válido.");
                return false;
            }

            // Validação dos Telefones
            var telefoneRegex = /^\(\+55\)\d{2}-\d{8}$/;
            if (!telefoneRegex.test(telefoneCelular) || !telefoneRegex.test(telefoneFixo)) {
                alert("Os campos Telefone Celular e Telefone Fixo devem ter o formato (+55)XX-XXXXXXXX.");
                return false;
            }

            // Validação do Endereço
            if (endereco.length === 0) {
                alert("Informe o Endereço Completo.");
                return false;
            }

            // Validação do Login
            if (login.length !== 6 || !/^[a-zA-Z]+$/.test(login)) {
                alert("O campo Login deve ter exatamente 6 caracteres alfabéticos.");
                return false;
            }

            // Validação da Senha
            if (senha.length !== 8 || !/^[a-zA-Z]+$/.test(senha)) {
                alert("O campo Senha deve ter exatamente 8 caracteres alfabéticos.");
                return false;
            }

            // Confirmação de Senha
            if (senha !== confirmarSenha) {
                alert("A senha e a confirmação de senha não coincidem.");
                return false;
            }

            return true;
        }
    