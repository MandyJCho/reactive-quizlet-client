import { schema, omit } from 'normalizr';

// Create schema for user object
export const userSchema = schema.Entity('user',
  { idAttribute: 'userToken' },
  thisUser => thisUser || omit(thisUser, 'userToken'),
);

// Create schema for card object
export const cardSchema = schema.Entity('card');

// Create a relational relationship schema for sets
export const setSchema = schema.Entity('set', {
  user: userSchema,
  cards: [cardSchema],
}, { idAttribute: 'setID' });
