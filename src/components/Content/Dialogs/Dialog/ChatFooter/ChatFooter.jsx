import React from "react";
import style from './ChatFooter.module.css'

const ChatFooter = (props) => {
    return (
        <div className={style.Main}>
            <input type="text" placeholder="Type your message:" />
            <img src="https://cdn-icons-png.flaticon.com/512/736/736110.png" alt="send" />
        </div>
    )
}

export default ChatFooter;