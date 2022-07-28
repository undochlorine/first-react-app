import React from 'react'
import style from './Dialogs.module.css'
import Chat_partner from "./Chat_partner/Chat_partner"
import {Route, Routes} from "react-router-dom";
import Chat from './Dialog/Chat/Chat'
import ChatFooterContainer from './Dialog/ChatFooter/ChatFooterContainer'

const Dialogs = (props) => {
    return (
        <div className={style.Main}>
            <div className={style.collocutors}>
                {
                    props.chat_partners.map((cp, index) => {
                        return (
                            <Chat_partner
                                id={cp.id}
                                name={cp.name}
                                avatar={cp.avatar}
                                key={cp.id}
                                fromMe={'me' === [...props.chats[index].chat_history].reverse()[0].from}
                                lastMsg={[...props.chats[index].chat_history].reverse()[0].message}
                            />)
                    })
                }
            </div>
            <div className={style.dialog}>
                <Routes>
                    {
                        props.chats.map((c, index) => {
                            return (
                                <Route
                                    path={c.path}
                                    key={index}
                                    element={[
                                        <Chat key={c.path} chat_history={c.chat_history} />,
                                        <ChatFooterContainer
                                            path={c.path}
                                            key={c.path.replace('/', '')}
                                        />
                                    ]}
                                />)
                        })
                    }
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs;