
exports.up = function(knex) {
  return knex.schema.createTable('clients', function(table) {
      table.increments();

      table.string('nome').notNullable();
      table.string('telefone').notNullable();
      table.string('endereco').notNullable();
      table.decimal('numero');
      table.string('cidade').notNullable();
      table.string('uf', 2).notNullable();
      table.string('pais').notNullable();
      table.string('cep').notNullable();

      table.integer('id_user');
      table.foreign('id_user').references('id').inTable('user');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};
