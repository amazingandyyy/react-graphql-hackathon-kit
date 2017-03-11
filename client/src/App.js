import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './App.css';

import BookSearch from './BookSearch';
import BookDetails from './BookDetails';

const Layout = ({ children }) => (
  <div>{ children }</div>
);

// Replace this Uri with your GraphQL server Uri
const serverUri = 'http://localhost:8080/graphql';

class App extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface({
      uri: serverUri,
      opts: { cors: true },
    });

    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: (obj) => {
        if (obj.id && obj.__typename) {
          return obj.__typename + ':' + obj.id;
        }
      },
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={BookSearch} />
            <Route path="/details/:bookId" component={BookDetails} />
          </Route>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
