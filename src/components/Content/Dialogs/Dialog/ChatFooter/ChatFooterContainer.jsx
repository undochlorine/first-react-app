import React from "react";
import {sendMsgActionCreator, onTypingMsgActionCreator} from "../../../../../redux/reducers/dialogs-reducer";
import store from "../../../../../redux/redux-store";
import ChatFooter from "./ChatFooter";

const ChatFooterContainer = (props) => {
    function sendMsg(msg) {
        if (msg !== '')
            store.dispatch(
                sendMsgActionCreator(
                    props.path,
                    msg
                )
            );
    }
    function onTypingMsg(msg) {
        store.dispatch(
            onTypingMsgActionCreator(
                props.path,
                msg
            )
        );
    }
    return (
        <ChatFooter
            sendMsg={sendMsg}
            onTypingMsg={onTypingMsg}
            typingMsg={props.typingMsg}
        />
    )
}

export default ChatFooterContainer;