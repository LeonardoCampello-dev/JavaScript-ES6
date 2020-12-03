const user = {
    name: 'Leonardo',
    age: 20,
    work: 'Developer'
}

const newUser = {
    ...user,
    name: 'Diego'
}

console.log(newUser)