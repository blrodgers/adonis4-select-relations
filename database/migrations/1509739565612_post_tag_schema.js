'use strict'

const Schema = use('Schema')

class PostTagSchema extends Schema {
  up () {
    this.create('posts_tags', (table) => {
      table.increments()
      table.integer('post_id')
      table.integer('tag_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts_tags')
  }
}

module.exports = PostTagSchema
