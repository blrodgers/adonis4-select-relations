'use strict'
const Post = use('App/Models/Post')

class PostController {
  async go ({request, view}){
    //keep output clean even if there are duplicate db entries
    //this doesn't change the results as far as 'tags', it just makes reading easier
    const limit = 1

    const noselect = await Post
      .query()
      .with('tags')
      .limit(limit)
      .fetch()

    const beforeselect = await Post
      .query()
      .select('title', 'body')
      .with('tags')
      .limit(limit)
      .fetch()

    const afterselect = await Post
      .query()
      .with('tags')
      .select('title', 'body')
      .limit(limit)
      .fetch()

    const dotselect = await Post
      .query()
      .with('tags')
      .select('posts.title', 'posts.body')
      .limit(limit)
      .fetch()

    const dotselectwithtags = await Post
      .query()
      .with('tags')
      //Error: no such column tags.name
      //.select('posts.title', 'posts.body', 'tags.name')
      .select('posts.title', 'posts.body', 'tags')
      .limit(limit)
      .fetch()

    const subqueryselect = await Post
      .query()
      .with('tags', (builder) => {
        builder.select('name')
      })
      .select('title', 'body')
      .limit(limit)
      .fetch()

    const subquerywithoutselect = await Post
      .query()
      .with('tags', (builder) => {
        builder.select('name')
      })
      .limit(limit)
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
