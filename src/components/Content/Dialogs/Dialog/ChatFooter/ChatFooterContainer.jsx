import {onTypingMsg as onTypingMsgActionCreator, sendMsg as sendMsgActionCreator} from "../../../../../redux/reducers/dialogs-reducer";
import ChatFooter from "./ChatFooter";
import {connect} from "react-redux";

function mapStateToProps(state, props) {
    let typingMsg = '';
    for (let i = 0; i < state.dialogs.chats.length; i++) {
        let chat = state.dialogs.chats[i]
        if(chat.path === props.path) {
            typingMsg = chat.typingMsg
            break;
        }
    }
    return {
        state: state.dialogs,
        typingMsg
    }
}
function mapDispatchToProps(dispatch, props) {
    function sendMsg(state) {
        let current_chat;
        for (let i = 0; i < state.chats.length; i++) {
            if (state.chats[i].path === props.path) {
                current_chat = state.chats[i]

                if (current_chat.typingMsg !== '') {
                    dispatch(
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
        sendMsg
    }
}

const ChatFooterContainer = connect(mapStateToProps, mapDispatchToProps)(ChatFooter)

export default ChatFooterContainer;