'use strict'

const Hapi = require('hapi')

const posts = require('./data/posts.json')
const comments = require('./data/comments.json')

const server = Hapi.server({
  host: 'localhost',
  port: 1234,
})

server.route({
  method: 'GET',
  path: '/',
  handler: () => posts,
  options: {
    cors: true,
  },
})

server.route({
  method: 'GET',
  path: '/comments/{postId}',
  handler: ({ params: { postId } }) => comments[postId],
  options: {
    cors: true,
  },
})

const init = async () => {
  await server.start()
  console.log(`Started at: ${server.info.uri}`)
}

init()
