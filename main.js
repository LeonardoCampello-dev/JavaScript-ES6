class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super()

        this.user = 'Leonardo'
    }
}

var myList = new TodoList()

myList.showUser()