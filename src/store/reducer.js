const initialState = {
  users: [],
  userDetail: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "FETCH_USER_DETAILS":
      const newUserData = state.users.find(
        (user) => user.id === action.payload
      );
      return {
        ...state,
        userDetail: newUserData,
      };

    default:
      return state;
  }
}
