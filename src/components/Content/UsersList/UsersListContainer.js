import React from "react";
import {friendAC, unfriendAC, addUsersAC} from "../../../redux/reducers/users-list-reducer";
import {connect} from "react-redux";
import UsersList from "./UsersList";

function mapStateToProps(state) {
    return {
        users: state.usersList.users
    }
}
function mapDispatchToProps(dispatch) {
    async function addUsers(maxId=0, limit=1) {
        try {
            const usersData = await fetch(`http://localhost:5000/users/${maxId}/${limit}`)
            const users = await usersData.json()
            dispatch(addUsersAC(users))
        } catch(e) {
            console.error(e.message)
        }
    }
    return {
        friend: (id) => dispatch(friendAC(id)),
        unfriend: (id) => dispatch(unfriendAC(id)),
        addUsers
    }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)
export default UsersListContainer