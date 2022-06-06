import React from "react";
import style from './Chat_partner.module.css'
import {NavLink} from "react-router-dom";

const Chat_partner = (props) => {
    return(
        <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? `${style.Main} ${style.active}` : style.Main}>
            <img src={props.avatar} alt="chat partner's face"/>
            <div>
                <h2 className={style.name}>{props.name.join(" ")}</h2>
                {/* Todo: last message */}
            </div>
        </NavLink>
    )
}

export default Chat_partner;