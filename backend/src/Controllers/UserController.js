const connection = require('../database/connection');
/*const crypto = require('crypto');

const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : "chaves",
    tipo : "hex"
};

function criptografar(senha) {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(senha);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};*/

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json({ users });
    },
    async create(request, response) {
        const { nome, email, senha } = request.body;

        //const cripSenha = criptografar(senha);

        const id = await connection('users').insert({
            nome,
            email,
            senha,
        });

        return response.json({ id });

    }  
}