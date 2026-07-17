async function buscarPersonagens(id) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        if (!response.ok) {
            throw new Error(`O personagem com o ID:${id} não foi encontrado no banco de dados.`);
            }

            const personagemConvertido = await response.json();
            return personagemConvertido;
        } 
        
        catch (error) {
            console.warn("Aviso de erro tratado:", error.message);
            return null;

        }
    }

let personagensRickAndMorty = ['2', '3', '4', '967'];
let promissesRickAndMorty = personagensRickAndMorty.map(id => buscarPersonagens(id));

Promise.all(promissesRickAndMorty).then(resultadoFinal => {
    // Filtra os nulls gerados pelos erros se quiserem uma lista 100% limpa
    const personagensExistentes = resultadoFinal.filter(p => p !== null);
    console.log("Esquadrão Pronto para os Web Components:", personagensExistentes);
});
