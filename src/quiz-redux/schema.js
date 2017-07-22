import { schema, omit } from 'normalizr';

// Create schema for user object
const userSchema = schema.Entity('user',
  { idAttribute: 'userToken' },
  thisUser => thisUser || omit(thisUser, 'userToken'),
);

// Create schema for card object
const cardSchema = schema.Entity('card');

// Create a relational relationship schema for sets
const setSchema = schema.Entity('set', {
  user: userSchema,
  cards: [cardSchema],
}, { idAttribute: 'setID' });

export { userSchema, cardSchema, setSchema };