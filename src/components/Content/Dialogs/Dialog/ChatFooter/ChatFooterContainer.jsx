import React from "react";
import {sendMsgActionCreator, onTypingMsgActionCreator} from "../../../../../redux/reducers/dialogs-reducer";
import ChatFooter from "./ChatFooter";
import StoreContext from "../../../../../StoreContext";

const ChatFooterContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
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

                return <ChatFooter
                    sendMsg={sendMsg}
                    onTypingMsg={onTypingMsg}
                    typingMsg={props.typingMsg}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default ChatFooterContainer;