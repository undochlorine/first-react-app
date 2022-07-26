import {onTypingMsgActionCreator, sendMsgActionCreator} from "../../../../../redux/reducers/dialogs-reducer";
import ChatFooterContainer2 from "./ChatFooter";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        state: state.dialogs
    }
}
function mapDispatchToProps(dispatch, props) {
    function sendMsg(state) {
        let current_chat;
        for (let i = 0; i < state.chats.length; i++) {
            if (state.chats[i].path === props.path) {
                current_chat = state.chats[i]

                if (current_chat.typingMsg !== '') {
                    props.dispatch(
                        sendMsgActionCreator(
                            props.path
                        )
                    );
                }

                break;
            }
        }
    }
    function onTypingMsg(msg) {
        dispatch(
            onTypingMsgActionCreator(
                props.path,
                msg
            )
        );
    }
    return {
        onTypingMsg,
        sendMsg,
        dispatch,
        typingMsg: props.typingMsg
    }
}

const ChatFooterContainer = connect(mapStateToProps, mapDispatchToProps)(ChatFooterContainer2)

export default ChatFooterContainer;