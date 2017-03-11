# Apollo React Hackathon Starter Kit

This demonstrates simple parameterized queries and routing. Get the full details about using Apollo with React in [the official Apollo docs](http://dev.apollodata.com/react/).

## Starting the app

This app talks to the GraphQL server found at [/server](../server).

Once you've installed and started that server, start this app with:

```sh
npm install
npm start
```

It will open a browser window, or you can browse to http://localhost:3000.

## Architecture

This app was created with [`create-react-app`](https://github.com/facebookincubator/create-react-app), so that is handling the build system for us.

Look into the files to see how they work - there are only 3 parts to the code:

- In [`src/App.js`](src/App.js), we're setting up routing with [React Router](https://github.com/ReactTraining/react-router) and initializing [Apollo Client](http://dev.apollodata.com/react/) with our server information.
- In [`src/BookSearch.js`](src/BookSearch.js) is the landing page for the app, which has a text box to search for books. That value is stored in state provided by [recompose](https://github.com/acdlite/recompose), and then passed into the `graphql` HoC where Apollo Client fetches the data from the server.
- In [`src/BookDetails.js`](src/BookDetails.js) there is an example of a view that gets parameters from the URL, in this case the ID of the book we want details for.
