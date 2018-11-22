'use strict'

const Hapi = require('hapi')

const posts = require('./data/posts.json')
const comments = require('./data/comments.json')

const routes = {
  method: 'GET',
  options: {
    cors: true,
  },
}

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
})

server.route({
  ...routes,
  path: '/',
  handler: () => posts,
})

server.route({
  ...routes,
  path: '/comments/{postId}',
  handler: ({ params: { postId } }) => comments[postId],
})

const init = async () => {
  await server.start()
  console.log(`Started at: ${server.info.uri}`)
}

init()
