const user = {
    name: 'Leonardo',
    age: 20,
    address: {
        state: 'RS',
        city: 'Novo Hamburgo'
    }
}

function showName({ name }) {
    console.log(name)
}

showName(user)