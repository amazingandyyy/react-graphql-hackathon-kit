# Hackathon starter server

This is a basic GraphQL server that uses the [Apollo GraphQL Server](https://github.com/apollographql/graphql-server) and [GraphQL Tools](https://github.com/apollographql/graphql-tools) to create and serve a simple schema.

It uses an in-memory data structure as a stand-in for a database, so if you restart the server or change the code, the data will reset. You might want to extend this to use a real database for your project.

You can also build your server using a GraphQL-as-a-service provider, for example [Graphcool](https://www.graph.cool/).

## Starting the server

```sh
npm install
npm start
# GraphQL Server is now running on http://localhost:8080/graphql
# Visit GraphiQL to run queries in your browser: http://localhost:8080/graphiql
```

The server will run on port 8080. You can change this by editing `server.js`.

## Architecture

The structure of this app is very simple. It's built according to the principles of the [graphql-tools](http://dev.apollodata.com/tools/graphql-tools/index.html) library, so you can consult that guide for more details.

There are only 4 relevant files:

- In [`src/schema.graphql`](src/schema.graphql), we use the [GraphQL schema language](http://graphql.org/learn/schema/) to define a schema for our API. Compared to REST, this is kind of like the route or resource definition.
- In [`src/resolvers.js`](src/resolvers.js), we define [resolve functions](http://dev.apollodata.com/tools/graphql-tools/resolvers.html) that are used by the schema to actually retrieve the data. This is like our controller methods. We load the data from a fake set of objects in [`src/db.js`](src/db.js), which could be replaced with a database or an external API. It's very easy to load data from an async source - just return a promise from your resolver.
- In [`src/schema.js`](src/schema.js), we put everything together into a schema object.
- In [`server.js`](server.js), we attach the schema to an Express web server. This is where you could add additional middleware to do authentication using something like Passport. Check out our [more complete example app](https://github.com/apollographql/GitHunt-API/blob/master/api/server.js) for how to do that.
