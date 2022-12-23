import React from "react";
import App from "./App";
import {connect} from "react-redux";
import LoginContainer from "./components/Auth/Login/LoginContainer";

class AppContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        if(!this.props.logged) {
            return window.history.replaceState(null, "", "/login")
        }
        if(
            window.location.pathname.slice(1) === 'login'
            || window.location.pathname.slice(1) === 'register'
        ) {
            return window.history.replaceState(null, "", "/")
        }
    }

    render() {
        return this.props.logged ? (
            <App
                {...this.props}
            />
        ) : (
            <LoginContainer />
        )
    }
}

function mapStateToProps(state) {
    return {
        logged: state.auth.logged
    }
}
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)