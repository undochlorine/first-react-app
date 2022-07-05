import React from "react";
import {sendMsgActionCreator, onTypingMsgActionCreator} from "../../../../../redux/reducers/dialogs-reducer";
import store from "../../../../../redux/redux-store";
import ChatFooter from "./ChatFooter";

const ChatFooterContainer = (props) => {
    function sendMsg() {
        let current_chat;
        for (let i = 0; i < store.getState().dialogs.chats.length; i++) {
            if (store.getState().dialogs.chats[i].path === props.path) {
                current_chat = store.getState().dialogs.chats[i]

                if (current_chat.typingMsg !== '') {
                    store.dispatch(
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