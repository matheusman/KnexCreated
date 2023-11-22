import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments('id').unique()
        table.string('email', 150).notNullable().unique()
        table.string('name', 50).notNullable()
        table.string('pass', 50).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

