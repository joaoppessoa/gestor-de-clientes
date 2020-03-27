const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const id_user = request.headers.authorization;

        const { page = 1 } = request.query;

        const [count] = await connection('clients')
            .count();

        const clients = await connection('clients')
            .where('clients.id_user', id_user)
            .join('users', 'users.id', '=', 'clients.id_user')
            .limit(5)
            .offset((page - 1) * 5)
            .select('clients.*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(clients);
    },

    async create(request, response) {
        const { nome, telefone, endereco, numero, cidade, uf, pais, cep } = request.body;
        const id_user = request.headers.authorization;

        const [id] = await connection('clients').insert({
            nome,
            telefone,
            endereco,
            numero, 
            cidade,
            uf,
            pais, 
            cep,
            id_user,
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params;
        const id_user = request.headers.authorization;


        const client = connection('clients')
            .where('id', id)
            .select('id_user')
            .first();


        if(client.id_user === id_user) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('clients')
            .where('id', id)
            .delete();

        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params;
        const id_user = request.headers.authorization;

        const { nome, telefone, endereco, numero, cidade, uf, pais, cep } = request.body;

        const client = connection('clients')
            .where('id', id)
            .select('id_user')
            .first();

        if(client.id_user === id_user) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('clients')
            .where('id', id)
            .update('nome', nome);

        await connection('clients')
            .where('id', id)
            .update('telefone', telefone);

        await connection('clients')
            .where('id', id)
            .update('endereco', endereco);

        await connection('clients')
            .where('id', id)
            .update('numero', numero);

        await connection('clients')
            .where('id', id)
            .update('cidade', cidade);

        await connection('clients')
            .where('id', id)
            .update('uf', uf);

        await connection('clients')
            .where('id', id)
            .update('pais', pais);

        await connection('clients')
            .where('id', id)
            .update('cep', cep);

        return response.status(204).send();

    }
}