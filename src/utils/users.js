const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if (!username || !room) {
        return{
            error: 'Username and room are required!'
        }
    }

    //Check for exsisting user
    const exsistingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //Validate username
    if (exsistingUser) {
        return {
            error: 'Username in use!'
        }
    }

    //Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const sid = users.find((user) => {
        return user.id === id
    })
    return sid
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}