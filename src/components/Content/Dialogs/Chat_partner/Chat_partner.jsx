import React from "react";
import style from './Chat_partner.module.css'
import {NavLink} from "react-router-dom";

const Chat_partner = (props) => {
    const limit_in_common = 22
    const [limit, prefix] = props.fromMe ?
        [(limit_in_common-4), 'You: '] : [limit_in_common, ''];
    const postfix = props.lastMsg.slice(0, limit) === props.lastMsg ?
        '' : '...'
    const lastMsg = prefix + props.lastMsg.slice(0, limit).trim() + postfix
    return(
        <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? `${style.Main} ${style.active}` : style.Main}>
            <img src={props.avatar} alt="chat partner's face"/>
            <div>
                <h2 className={style.name}>{props.name.join(" ")}</h2>
                <h5 className={style.last}>{lastMsg}</h5>
            </div>
        </NavLink>
    )
}

export default Chat_partner;