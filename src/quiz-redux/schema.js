import {schema} from 'normalizr';

const userSchema = schema.Entity('user');
const setSchema = schema.Entity('set');
const cardSchema = schema.Entity('card');

// a user will have a list of sets
userSchema.define({
  sets: [setSchema],
});

setSchema.define({

});