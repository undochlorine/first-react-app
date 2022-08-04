import React from "react";
import style from './styles/UsersList.module.css'
import showMoreStyle from './styles/showMore.module.css'
import friendStyle from './styles/friend.module.css'

class UsersList extends React.Component {

    constructor(props) {
        super(props);
        //initial users batch
        if(props.users.length === 0) {
            this.props.addUsers(0, 2)
        }
    }

    maxId = () => {
        let max = this.props.users[0]?.id;
        for (let i = 0; i < this.props.users.length; i++) {
            if (this.props.users[i].id > max) {
                max = this.props.users[i].id
            }
        }
        return max;
    }

    addMore = () => {
        this.props.addUsers(this.maxId(), 2)
    }

    switchFriendState = ({state, id}) => {
        switch (state) {
            case true:
                this.props.unfriend(id);
                break;
            case false:
                this.props.friend(id);
                break;
            default:
                return 0;
        }
    }

    render() {
        return (
            <div className={style.Main}>
                <div className={style.wrapper}>
                    {this.props.users.map(user => {
                        return (
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
                                        onClick={() => this.switchFriendState({
                                            state: user.friend,
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
                            onClick={this.addMore}
                        >
                            <span className={showMoreStyle.showMoreSpan}></span>
                            <span className={showMoreStyle.showMoreSpan}></span>
                            <span className={showMoreStyle.showMoreSpan}></span>
                            <span className={showMoreStyle.showMoreSpan}></span>Show more
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UsersList