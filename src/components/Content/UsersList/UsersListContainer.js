import React from "react";
import {friendAC, unfriendAC, addUsersAC} from "../../../redux/reducers/users-list-reducer";
import {connect} from "react-redux";
import UsersList from "./UsersList";

class UsersListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.addUsers(0, 2)
        }
    }

    maxId = () => {
        let max = this.props.users[0]?.id;
        for (let i = 0; i < this.props.users.length; i++) {
            if (this.props.users[i].id > max) {
                max = this.props.users[i].id
            }
        }
        return max;
    }

    addMore = () => {
        this.props.addUsers(this.maxId(), 2)
    }

    switchFriendState = ({state, id}) => {
        switch (state) {
            case true:
                this.props.unfriend(id);
                break;
            case false:
                this.props.friend(id);
                break;
            default:
                return 0;
        }
    }

    render() {
        return(
            <UsersList
                users={this.props.users}
                switchFriendState={this.switchFriendState}
                addMore={this.addMore}
            />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer)