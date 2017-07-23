import {Schema, arrayOf } from 'normalizr';

// Create schema for user object
const userSchema = Schema('user', { idAttribute: 'userToken' });

// Create schema for card object
const cardSchema = Schema('card', {idAttribute: 'cardID'});

// Create a relational relationship schema for sets
const setSchema = Schema('set', { idAttribute: 'setID' });

setSchema.define({
  user: userSchema,
  cards: arrayOf(cardSchema),
});

export { userSchema, cardSchema, setSchema };