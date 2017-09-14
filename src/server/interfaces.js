import { GraphQLInterfaceType,
  GraphQLString,
} from 'graphql';

const EntityType = new GraphQLInterfaceType({
  name: 'Entity',
  fields: {
    name: GraphQLString,
    id: GraphQLString,
  },
  resolveType: {},
});

export default EntityType;
