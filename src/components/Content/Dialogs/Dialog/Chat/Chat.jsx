import React from "react";
import style from './Chat.module.css'

const Chat = (props) => {
    const messages_jsx = props.chat_history.map(obj => <div className={style[obj.from]}><p>{obj.message}</p></div>);
    // document.querySelector('.' + style.Main).scrollTo({ bottom: 0 });

    return(
        <div className={style.Main}>
            {messages_jsx}
        </div>
    )
}

export default Chat;