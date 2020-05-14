const routerUsers = require('express').Router();
const users = require('../data/users.json');

routerUsers.get('/', (req, res) => {
  res.send(users);
});

const doesUserExist = (req, res) => {
  // eslint-disable-next-line arrow-parens
  const foundUsers = users.find(i => i._id === req.params.id);
  if (foundUsers) {
    res.status(200).send(foundUsers);
    return;
  }
  res.status(404).send({ message: 'Нет пользователя с таким id' });
};

routerUsers.get('/:id', doesUserExist);

module.exports = routerUsers;
