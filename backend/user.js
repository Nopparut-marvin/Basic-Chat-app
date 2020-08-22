const { get } = require("./router");

const users = [];
const addUser = ({ id, name }) => {
  name = name.trim();
  const findUser = users.find((user) => user.name === name);
  if (findUser) return { error: "name is taken" };
  user = { id, name };
  users.push(user);
  return { user };
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
};
getUser = (id) => {
  return users.find((user) => user.id === id)  
}

module.exports = { addUser, removeUser, getUser };
