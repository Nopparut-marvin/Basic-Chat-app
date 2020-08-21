const users = [];
const addUser = ({ id, name }) => {
  nametrm = name.trim();
  const findUser = users.find((user) => user.name === nametrm);
  if (findUser) return { error: "name is taken" };
  user = { id, nametrm };
  users.push(user);
  return { user };
};
const removeUser = ({ id }) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
};
getUser = ({ id }) => {
  return users.find((user) => user.id === id);
};

module.exports = { addUser, removeUser, getUser };
