import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export const Set = new GraphQLList({
  name: 'Set',
  description: 'Study set a user creates',
  fields: {
    
  },
});