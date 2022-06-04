import React from "react";
import style from './Collocutor.module.css'
import {NavLink} from "react-router-dom";

const Collocutor = (props) => {
    return(
        <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => isActive ? `${style.Main} ${style.active}` : style.Main}>
            <img src={props.avatar} alt="collocutor's face"/>
            <div>
                <h2 className={style.name}>{props.name.join(" ")}</h2>
                {/* Todo: last message */}
            </div>
        </NavLink>
    )
}

export default Collocutor;