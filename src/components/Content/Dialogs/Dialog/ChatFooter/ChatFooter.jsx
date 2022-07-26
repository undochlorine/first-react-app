import React from "react";
import style from './ChatFooter.module.css'

const ChatFooter = (props) => {

    const input = React.createRef();

    const isEnter = (e) => e.code === 'Enter' ? sendMsg() : '';

    function sendMsg() {
        props.sendMsg(props.state)
    }
    function onTypingMsg() {
        let msg = input.current.value;
        props.onTypingMsg(msg)
    }

    return (
        <div className={style.Main}>
            <input
                onKeyDown={isEnter}
                type="text"
                ref={input}
                onChange={onTypingMsg}
                value={props.typingMsg}
                autoFocus={true}
                placeholder="Type your message:" />
            <img onClick={sendMsg} src="https://cdn-icons-png.flaticon.com/512/736/736110.png" alt="send" />
        </div>
    )
}

export default ChatFooter;