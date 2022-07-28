import React from "react";
import style from './Chat.module.css'
import {Profiler} from "react";

const Chat = (props) => {
    const messages_jsx = props.chat_history.map(obj => <div className={style[obj.from]} key={obj.id}><p>{obj.message}</p></div>);
    // document.querySelector('.' + style.Main).scrollTo({ bottom: 0 });

    const messages = React.createRef()

    function scrollDownLast() {
        let latestMsg = messages.current.children[
        messages.current.children.length-1
            ];
        if(latestMsg) {
            latestMsg.scrollIntoView({behavior: 'smooth'})
        }
    }

    return(
        <Profiler id="div" onRender={scrollDownLast}>
            <div className={style.Main} ref={messages}>
                {messages_jsx}
            </div>
        </Profiler>
    )
}

export default Chat;