import { authors, books } from './db';

// Resolvers are like mini router handlers that
// actually define what your schema fields do when they
// are queried.

// Read about them in detail here:
// http://dev.apollodata.com/tools/graphql-tools/resolvers.html

const resolveFunctions = {
  Query: {
    authors() {
      // Resolvers can return data
      return authors;
    },
    books() {
      // Or they can return promises
      return Promise.resolve(books);
    },

    // These resolvers take arguments
    bookByID(_, args) {
      return books.find(book => book.id === args.id);
    },
    bookSearch(_, args) {
      return books.filter(book => book.title.toLowerCase().includes(args.keyword.toLowerCase()));
    }
  },
  Mutation: {
    // This is just like a regular resolver, but since it's a Mutation
    // it actually writes to our "database"
    addBook(_, args) {
      books.push(args.book);
      return args.book;
    }
  },
  Book: {
    // For fields that aren't on the root query type,
    // you get the parent object as the first argument.
    // In this case, that's a book object, and this
    // resolver's job is to get right correct author.
    author(book) {
      return authors[book.authorId];
    }
  },
  Author: {
    books(author) {
      return books.filter(book => book.authorId === author.id);
    }
  }
};

export default resolveFunctions;
