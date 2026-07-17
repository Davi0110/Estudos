export async function buscarEnderecoPorCep(cep) {

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // 2. Se conectou, mas a API recusou o formato (Ex: 400 Bad Request)
    if (!resposta.ok) {
        throw new Error('Cep Inválido');
    }

    const dados = await resposta.json();

    // 3. Se a API respondeu, mas o CEP não existe na base (Ex: {erro: true})
    if (dados.erro) {
        throw new Error('CEP não encontrado.');
    }

    return dados;
}