const routerUsers = require('express').Router();
const users = require('../data/users.json');

routerUsers.get('/users', (req, res) => {
  res.send(users);
});

const doesUserExist = (req, res) => {
  // eslint-disable-next-line arrow-parens
  const match = users.find(i => i._id === req.params.id);
  if (match !== undefined) {
    res.status(200).send(match);
  } else (res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));
};

routerUsers.get('/users/:id', doesUserExist);

module.exports = routerUsers;
