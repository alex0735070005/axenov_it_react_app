export const SET_USERS = 'SET_USERS';

export const initialState = {
  users: [],
};

export default (state, action) => {
  switch (action.type) {
    case SET_USERS: {
      const { users } = action.payload;
      return {
        ...state,
        users,
      };
    }
    default:
      return state;
  }
};
