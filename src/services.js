export const getUserService = async () => {
  const userList = await fetch("https://jsonplaceholder.typicode.com/users");
  return userList;
};

export const getUserDetailsService = async (id) => {
  const userDetails = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return userDetails;
};
