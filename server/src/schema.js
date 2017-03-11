import fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

function requireGraphQL(name) {
  const filename = require.resolve(name);
  return fs.readFileSync(filename, 'utf8');
}

export default makeExecutableSchema({
  typeDefs: requireGraphQL('./schema.graphql'),
  resolvers,
});
