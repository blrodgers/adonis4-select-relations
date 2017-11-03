'use strict'
const Post = use('App/Models/Post')

class PostController {
  async go ({request, view}){

    const noselect = await Post
      .query()
      .with('tags')
      .fetch()

    const beforeselect = await Post
      .query()
      .select('title', 'body')
      .with('tags')
      .fetch()

    const afterselect = await Post
      .query()
      .with('tags')
      .select('title', 'body')
      .fetch()

    const dotselect = await Post
      .query()
      .with('tags')
      .select('posts.title', 'posts.body')
      .fetch()

    const dotselectwithtags = await Post
      .query()
      .with('tags')
      //Error: no such column tags.name
      //.select('posts.title', 'posts.body', 'tags.name')
      .select('posts.title', 'posts.body', 'tags')
      .fetch()

    const subqueryselect = await Post
      .query()
      .with('tags', (builder) => {
        builder.select('name')
      })
      .select('title', 'body')
      .fetch()

    const subquerywithoutselect = await Post
      .query()
      .with('tags', (builder) => {
        builder.select('name')
      })
      .fetch()

    return view.render('post', {
      noselect: noselect.toJSON(),
      beforeselect: beforeselect.toJSON(),
      afterselect: afterselect.toJSON(),
      dotselect: dotselect.toJSON(),
      dotselectwithtags: dotselectwithtags.toJSON(),
      subqueryselect: subqueryselect.toJSON(),
      subquerywithoutselect: subquerywithoutselect.toJSON()})
  }
}

module.exports = PostController
