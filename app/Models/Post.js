'use strict'

const Model = use('Model')

class Post extends Model {
  tags() {
    return this.belongsToMany('App/Models/Tag').pivotTable('posts_tags')
  }
}

module.exports = Post
