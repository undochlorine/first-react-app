import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        chat_partners: state.dialogs.chat_partners,
        chats: state.dialogs.chats
    }
}
function mapDispatchToProps() {
    return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;