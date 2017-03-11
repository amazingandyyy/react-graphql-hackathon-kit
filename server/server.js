import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { printSchema } from 'graphql/utilities/schemaPrinter';

import schema from './data/schema';

const GRAPHQL_PORT = 8080;

const graphQLServer = express().use('*', cors());

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {},
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  query: `# This is an example query
# Edit it to fetch different data!

{
  authors {
    name
    books {
      title
    }
  }
}`,
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql
Visit GraphiQL to run queries in your browser: http://localhost:${GRAPHQL_PORT}/graphiql`
));

