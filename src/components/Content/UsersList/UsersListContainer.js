import React from "react";
import {
    friend as friendAC,
    unfriend as unfriendAC,
    loadMoreUsers as loadMoreUsersAC,
    setLoading as setLoadingAC,
    stopLoading as stopLoadingAC,
    switchAreThereMore
} from "../../../redux/reducers/users-list-reducer";
import {connect} from "react-redux";
import UsersList from "./UsersList";

class UsersListContainer extends React.Component {
    constructor(props) {
        super(props);
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

    async componentDidMount() {
        if (this.props.users.length === 0) {
            await this.props.loadMoreUsers(this.maxId(), 2, this.props.areThereMore)
        }
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
        return (
            <UsersList
                users={this.props.users}
                switchFriendState={this.switchFriendState}
                loadMoreUsers={() => this.props.loadMoreUsers(this.maxId(), 2, this.props.areThereMore)}
                isFetching={this.props.isFetching}
                areThereMore={this.props.areThereMore}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersList.users,
        isFetching: state.usersList.isFetching,
        areThereMore: state.usersList.areThereMore
    }
}

function mapDispatchToProps(dispatch) {
    function setLoading() {
        dispatch(setLoadingAC())
    }
    function stopLoading() {
        dispatch(stopLoadingAC())
    }
    async function fetchAreThereMore(maxId, current) {
        try {
            const usersData = await fetch(`https://camo-app.herokuapp.com/users/${maxId}/1`)
            const users = await usersData.json()
            if(current === true && users[0] === undefined) {
                dispatch(switchAreThereMore(false))
            } else if(current === false && users[0] !== undefined) {
                dispatch(switchAreThereMore(true))
            }
            return users[0] !== undefined
        } catch (e) {
            console.error(e.message)
        }
    }
    async function loadMoreUsers(maxId = 0, limit = 1, currentATMState) {
        try {
            setLoading()
            const areThereMore = await fetchAreThereMore(maxId, currentATMState)
            if(areThereMore) {
                const usersData = await fetch(`https://camo-app.herokuapp.com/users/${maxId}/${limit}`)
                const users = await usersData.json()
                dispatch(loadMoreUsersAC(users))
                await fetchAreThereMore(maxId + limit, currentATMState)
            }
        } catch (e) {
            console.error(e.message)
        } finally {
            stopLoading()
        }
    }

    return {
        friend: (id) => dispatch(friendAC(id)),
        unfriend: (id) => dispatch(unfriendAC(id)),
        loadMoreUsers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer)