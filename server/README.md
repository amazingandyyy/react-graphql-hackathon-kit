# Hackathon starter server

This is a really simple GraphQL server that uses the [Apollo GraphQL Server](https://github.com/apollographql/graphql-server) and [GraphQL Tools](https://github.com/apollographql/graphql-tools) to create and serve a simple schema.

It uses a very simple in-memory data structure, so if you restart the server or change the code, the data will reset. You might want to extend this to use a real database for your project.

You can also build your server using a GraphQL-as-a-service provider, for example [Graphcool](https://www.graph.cool/).

## Starting the server

```
npm install
npm start
```

The server will run on port 8080. You can change this by editing `server.js`.
