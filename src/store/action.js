export const fetchUsers = (userData) => {
  return {
    type: "FETCH_USERS",
    payload: userData,
  };
};

export const fetchUserDetails = (userData) => {
  return {
    type: "FETCH_USER_DETAILS",
    payload: userData,
  };
};
