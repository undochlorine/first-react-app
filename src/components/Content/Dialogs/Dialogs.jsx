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
                    props.state.chat_partners.map(cp => {
                        return (
                            <Chat_partner
                                id={cp.id}
                                name={cp.name}
                                avatar={cp.avatar}
                            />)
                    })
                }
            </div>
            <div className={style.dialog}>
                <Routes>
                    {
                        props.state.chats.map(c => {
                            return (
                                <Route
                                    path={c.path}
                                    element={[
                                        <Chat chat_history={c.chat_history} />,
                                        <ChatFooterContainer
                                            path={c.path}
                                            typingMsg={c.typingMsg}
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