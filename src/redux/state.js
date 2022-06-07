let renderEntireDom = function(){}
export const subscribe = (observer) => {
    renderEntireDom = observer;
}

const state = {
    profile: {
        images: [
            {src: "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/2332/people-persons-peoples.jpg?itok=OXWARzCz", alt: "p1"},
            {src: "https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg", alt: "p2"},
            {src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?quality=75&width=982&height=726&auto=webp", alt: "p3"},
            {src: "https://personalexcellence.co/files/5-people.jpg", alt: "p4"},
            {src: "https://i.insider.com/5cb8b133b8342c1b45130629?width=700", alt: "p5"}
        ]
    },
    dialogs: {
        chat_partners: [
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
        ],
        chats: [
            {
                path: "/1",
                chat_history: [
                    {message: "Hi, are you already at home?", from: 'me'},
                    {message: "Yeah. I'm at home since 2.AM", from: 'them'},
                    {message: "So, what are u gonna do now?", from: 'me'},
                    {message: "I feel like sleepin'. Prolly I gonna have nap.", from: 'them'}
                ],
                typingMsg: ''
            },
            {
                path: "/2",
                chat_history: [
                    {message: "Please don't fire me!", from: 'me'},
                    {message: "Pleeeeease", from: 'me'},
                    {message: "I'm beggin'", from: 'me'},
                    {message: "Ha, pathetic", from: 'them'}
                ],
                typingMsg: ''
            },
            {
                path: "/3",
                chat_history: [
                    {message: "You know what? That joke insulted me and you didn't even notice that!", from: 'them'},
                    {message: "I suppose we should take a break in our relationship, sorry..", from: 'them'},
                    {
                        message: "I'm really sorry but I respect your wish. Are u gonna remove me from the friends list?",
                        from: 'me'
                    },
                    {message: "I'm not 7, sure I ain't", from: 'them'}
                ],
                typingMsg: ''
            }
        ]
    },
    music: {}
}

export const sendMsg = (cpi, msg) => {
    for (let i = 0; i < state.dialogs.chats.length; i++) {
        if(state.dialogs.chats[i].path == cpi) {
            state.dialogs.chats[i].chat_history.push({message: msg, from: 'me'})
            state.dialogs.chats[i].typingMsg = '';
            break;
        }
    }
    renderEntireDom(state);
    return 'Sent successfully!';
}
export const onTypingMsg = (cpi, msg) => {
    for (let i = 0; i < state.dialogs.chats.length; i++) {
        if (state.dialogs.chats[i].path == cpi) {
            state.dialogs.chats[i].typingMsg = msg;
            break;
        }
    }
    renderEntireDom(state);
    return 'Typed successfully!'
}

window.state = state;
export default state;