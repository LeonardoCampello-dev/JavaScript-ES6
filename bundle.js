"use strict";

var user = {
  name: 'Leonardo',
  age: 20,
  address: {
    state: 'RS',
    city: 'Novo Hamburgo'
  }
};

function showName(_ref) {
  var name = _ref.name;
  console.log(name);
}

showName(user);
