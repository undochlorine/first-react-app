import React from "react";
import style from './styles/UsersList.module.css'
import showMoreStyle from './styles/showMore.module.css'
import friendStyle from './styles/friend.module.css'
import {Profiler} from "react";

const UsersList = (props) => {

    const usersRef = React.createRef()
    function scrollDownLast() {
        let lastUser = usersRef.current.children[
            usersRef.current.children.length-1
        ];
        if (lastUser) {
            lastUser.scrollIntoView({behavior: 'smooth'})
        }
    }

    function maxId() {
        let max = props.users[0]?.id;
        for (let i = 0; i < props.users.length; i++) {
            if(props.users[i].id > max) {
                max = props.users[i].id
            }
        }
        return max;
    }
    function addMore() {
        props.addUsers(maxId(), 2)
    }
    function switchFriendState({state, id}) {
        switch(state) {
            case true: props.unfriend(id); break;
            case false: props.friend(id); break;
            default: return 0;
        }
    }
    return(
        <Profiler id='div' onRender={scrollDownLast}>
            <div className={style.Main}>
                <div className={style.wrapper} ref={usersRef}>
                    {props.users.map(user => {
                        return(
                            <div className={style.user} key={user.id}>
                                <div className={style.avatar}>
                                    <img src={user.avatar} alt="User avatar"/>
                                </div>
                                <div className={style.info}>
                                    <div className={style.fullname}>
                                        <p>{user.name} {user.lastname}</p>
                                    </div>
                                    <div className={style.status}>
                                        <p>{user.status}</p>
                                    </div>
                                    <div className={style.location}>
                                        <p>{user.location.country}, {user.location.city}</p>
                                    </div>
                                </div>
                                <div className={friendStyle.subscribe}>
                                    <button
                                        onClick={() => switchFriendState({
                                            state:user.friend,
                                            id: user.id
                                        })}
                                    >{user.friend ? 'Unfriend' : 'To friend'}</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className={showMoreStyle}>
                        <button
                            className={showMoreStyle.showMoreBtn}
                            onClick={addMore}
                        >
                            <span className={showMoreStyle.showMoreSpan}></span>
                            <span className={showMoreStyle.showMoreSpan}></span>
                            <span className={showMoreStyle.showMoreSpan}></span>
                            <span className={showMoreStyle.showMoreSpan}></span>Show more
                        </button>
                    </div>
                </div>
            </div>
        </Profiler>
    )
}

export default UsersList