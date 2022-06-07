import React from "react";
import style from './ChatFooter.module.css'

const ChatFooter = (props) => {

    const input = React.createRef();

    function sendMsg() {
        let msg = input.current.value;
        if (msg !== '')
            props.sendMsg(props.path, msg);
    }
    function onTypingMsg() {
        let msg = input.current.value;
        props.onTypingMsg(props.path, msg);
    }

    return (
        <div className={style.Main}>
            <input
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