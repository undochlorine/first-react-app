import React from "react";
import style from './ChatFooter.module.css'

const ChatFooter = (props) => {

    const input = React.createRef();

    function sendMsg() {
        let msg = input.current.value;
        if (msg !== '')
            props.sendMsg(props.path, msg);
        input.current.value = '';
    }

    return (
        <div className={style.Main}>
            <input type="text" ref={input} placeholder="Type your message:" />
            <img onClick={sendMsg} src="https://cdn-icons-png.flaticon.com/512/736/736110.png" alt="send" />
        </div>
    )
}

export default ChatFooter;