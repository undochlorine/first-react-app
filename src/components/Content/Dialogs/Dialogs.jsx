import React from 'react'
import style from './Dialogs.module.css'
import Collocutor from "./Collocutor/Collocutor"
import {Route, Routes} from "react-router-dom";
import Chat from './Dialog/Chat/Chat'
import ChatFooter from './Dialog/ChatFooter/ChatFooter'

const Dialogs = () => {
    const mark_history = [
        {message: "Hi, are you already at home?", from: 'me'},
        {message: "Yeah. I'm at home since 2.AM", from: 'them'},
        {message: "So, what are u gonna do now?", from: 'me'},
        {message: "I feel like sleepin'. Prolly I gonna have nap.", from: 'them'}
    ];
    const joe_history = [
        {message: "Please don't fire me!", from: 'me'},
        {message: "Pleeeeease", from: 'me'},
        {message: "I'm beggin'", from: 'me'},
        {message: "Ha, pathetic", from: 'them'}
    ];
    const felicity_history = [
        {message: "You know what? That joke insulted me and you didn't even notice that!", from: 'them'},
        {message: "I suppose we should take a break in our relationship, sorry..", from: 'them'},
        {message: "I'm really sorry but I respect your wish. Are u gonna remove me from the friends list?", from: 'me'},
        {message: "I'm not 7, sure I ain't", from: 'them'}
    ];

    const collocutors = [
        {
            id: "1",
            name: ["Mark", "Chris"],
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        },
        {
            id: "2",
            name: ["Joe", "Maker"],
            avatar: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
        },
        {
            id: "3",
            name: ["Felicity", "Smoak"],
            avatar: "https://img.favpng.com/14/10/18/emily-bett-rickards-felicity-smoak-arrow-png-favpng-TfX7epyVbXj2GTM2j1z7DG0vM.jpg"
        }
    ]
    const chats = [
        {
            path: "/1",
            chat_history: mark_history
        },
        {
            path: "/2",
            chat_history: joe_history
        },
        {
            path: "/3",
            chat_history: felicity_history
        }
    ]

    return (
        <div className={style.Main}>
            <div className={style.collocutors}>
                {
                    collocutors.map(col => <Collocutor id={col.id} name={col.name} avatar={col.avatar} />)
                }
            </div>
            <div className={style.dialog}>
                <Routes>
                    {
                        chats.map(c => <Route path={c.path} element={[ <Chat chat_history={c.chat_history} />, <ChatFooter /> ]} />)
                    }
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs;