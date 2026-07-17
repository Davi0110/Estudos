// Cria a função assíncrona e recebe o nome do pokemon como parâmetro
async function buscarPokemon(nome) {
    /*Faz uma requisição HTTP para o endpoint da PokeAPI.
    O await aguarda a Promise retornada pelo fetch ser resolvida. */
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        // Verifica se a resposta HTTP foi bem-sucedida (com base no status da resposta do servidor.)
        if (!response.ok) {
            throw new Error(`Pokémon "${nome}" não foi encontrado no banco de dados.`);
        }
        // Converte a resposta para JSON e retorna os dados do Pokémon:
        const pokemonConvertido = await response.json();
        return pokemonConvertido;

    }
    // Captura e exibe o erro de forma controlada
    catch (error) {
        console.warn("Aviso de erro tratado:", error.message);

        // Retorna null para indicar falha sem interromper a execução
        return null;
    }

}

let timePokemon = ['pikachu', 'charizard', 'mewtwo', 'agumon'];
let promisesPokemon = timePokemon.map(nome => buscarPokemon(nome));

Promise.all(promisesPokemon).then(resultadoFinal => {
    // Filtra os nulls gerados pelos erros se quiserem uma lista 100% limpa
    const esquadraoValido = resultadoFinal.filter(p => p !== null);
    console.log("Esquadrão Pronto para os Web Components:", esquadraoValido);
});
