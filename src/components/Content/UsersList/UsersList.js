import React from "react";
import style from './styles/UsersList.module.css'
import showMoreStyle from './styles/showMore.module.css'
import friendStyle from './styles/friend.module.css'
import Loading from "../../Assets/Loading/Loading";
import {NavLink} from "react-router-dom";

const UsersList = (props) => {
    return (
        <div className={style.Main}>
            <div className={style.wrapper}>
                {props.users.map(user => {
                    return (
                        <div className={style.user} key={user.id}>
                            <NavLink to={`/profile/${user.id}`} className={style.avatar}>
                                <img src={user.avatar} alt="User avatar"/>
                            </NavLink>
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
                                    onClick={() => props.switchFriendState({
                                        state: user.friend,
                                        id: user.id
                                    })}
                                >{user.friend ? 'Unfriend' : 'To friend'}</button>
                            </div>
                        </div>
                    )
                })}
                {props.isFetching
                    ?   <Loading />
                    :   props.areThereMore
                            ?   <div className={showMoreStyle}>
                                    <button
                                        className={showMoreStyle.showMoreBtn}
                                        onClick={props.loadMoreUsers}
                                    >
                                        <span className={showMoreStyle.showMoreSpan}></span>
                                        <span className={showMoreStyle.showMoreSpan}></span>
                                        <span className={showMoreStyle.showMoreSpan}></span>
                                        <span className={showMoreStyle.showMoreSpan}></span>Show more
                                    </button>
                                </div>
                            : null
                }
            </div>
        </div>
    )

}
export default UsersList