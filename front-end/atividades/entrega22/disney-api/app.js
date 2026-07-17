async function personagensDisney(nome) {
    try {
        const response = await fetch(`https://api.disneyapi.dev/character?name=${nome}`);
        if (!response.ok) {
            throw new Error(`O personagem ${nome} não foi encontrado no banco de dados.`);
        }
        const personagemDisneyConvertido = await response.json();
        return personagemDisneyConvertido;
    }
    catch (error) {
        console.warn("Aviso de erro tratado:", error.message);
        return null;
    }
}
