import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setLoadingAC, setUser, stopLoadingAC} from "../../../redux/reducers/profile-reducer";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await this.props.fetchUser(this.props.params.id ?? 1)
    }

    render() {
        return (
            <Profile
                {...this.props}
            />
        )
    }
}

const ProfileContainerWithURL = (props) => {
    return <ProfileContainer
                {...props}
                params={useParams()}
            />
}

function mapStateToProps(state) {
    return {
        user: state.profile.user,
        loading: state.profile.loading
    }
}
function mapDispatchToProps(dispatch) {
    async function fetchUser(id) {
        try {
            dispatch(setLoadingAC())
            const userData = await fetch(`https://camo-app.herokuapp.com/user/${id}`)
            const user = (await userData.json())[0]
            dispatch(setUser(user))
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(stopLoadingAC())
        }
    }
    return {
        fetchUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithURL)