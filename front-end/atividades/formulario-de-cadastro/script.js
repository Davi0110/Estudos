async function buscarEndereco(cep) {

    const mensagemErro = document.getElementById('erro');

    mensagemErro.textContent = '';
    mensagemErro.className = '';
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw new Error('CEP não existente!');
        }

        document.getElementById('cidade').value = consultaCEPConvertida.localidade;
        document.getElementById('endereco').value = consultaCEPConvertida.logradouro;
        document.getElementById('bairro').value = consultaCEPConvertida.bairro;
        document.getElementById('estado').value = consultaCEPConvertida.uf;

        mensagemErro.textContent = 'CEP localizado com sucesso!';
        mensagemErro.classList.add('alert', 'alert-sucess');

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    } catch (erro) {
        mensagemErro.classList.add('alert', 'alert-danger');
        
        if(erro.message === 'CEP não encontrado!') {
            mensagemErro.textContent = erro.message;
        } else {
            mensagemErro.textContent = 'CEP inválido. Tente novamente!';
        }
    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));
