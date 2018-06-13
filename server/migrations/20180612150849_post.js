
const uuidv4 = require('uuid/v4');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', (tbl) => {
    tbl
      .uuid('id')
      .defaultTo(uuidv4())
      .primary();

    tbl
      .string('title', 128)
      .notNullable();

    tbl
      .text('content')
      .notNullable();

    tbl
      .integer('user_id')
      .references('id').inTable('user');

    tbl
      .integer('category_id')
      .references('id').inTable('category');

    tbl
      .timestamp('created_at')
      .defaultTo(knex.fn.now());

    tbl
      .timestamp('updated_at')
      .defaultTo(knex.fn.now());

    tbl
      .integer('upvotes')
      .defaultTo(0);

    tbl
      .integer('downvotes')
      .defaultTo(0);

    tbl
      .integer('views')
      .defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};