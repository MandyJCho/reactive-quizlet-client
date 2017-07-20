// Action type
export const CREATE_SET = 'CREATE_SET';
export const UPDATE_SET = '';

// Action Creators

/*
*
*/
export function createSetAC(setName) {
  return {
    type: CREATE_SET,
    setName,
  };
}


