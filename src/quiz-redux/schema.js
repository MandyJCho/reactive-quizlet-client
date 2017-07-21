import {normalize, schema} from 'normalizr';
import {}

// Create schema for user object
export const userSchema = schema.Entity('user', {});

// Create schema for card object
export const cardSchema = schema.Entity('card');


// Create a relational relationship schema for sets
export const setSchema = schema.Entity('set', {
  user: userSchema,
  cards: [cardSchema],
});
