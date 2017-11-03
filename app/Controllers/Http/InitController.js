'use strict'
const Post = use('App/Models/Post')
const Tag = use('App/Models/Tag')

class InitController {
  async go ({request, view}){
    var worked = true

    try{
      var post = new Post()
    post.title = "Post Title 1"
    post.body = "Body 1"

    await post.save()

    var tags = await post.tags().createMany([{name:'javascript'}, {name:'node'}])

    } catch(error) {
      worked = false;
    }
    return view.render('init', {worked})
  }
}

module.exports = InitController
