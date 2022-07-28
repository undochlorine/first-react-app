import Music from "./Music";
import {connect} from "react-redux";

function mapStateToProps() {
    return {}
}
function mapDispatchToProps() {
    return {}
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)

export default MusicContainer;