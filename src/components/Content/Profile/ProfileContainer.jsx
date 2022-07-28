import Profile from "./Profile";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        images: state.profile.images
    }
}
function mapDispatchToProps() {
    return {}
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;