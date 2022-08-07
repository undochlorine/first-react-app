import React from "react";
import style from './Profile.module.css'
import Loading from "../../Assets/Loading/Loading";

const Profile = (props) => {
    if(!props.user) {
        return <div></div>
    }
    return props.loading
            ?   <Loading />
            :   <div className={style.Main}>
                    <div className={style.header}>
                        <div className={style.left}>
                            <img src={props.user.avatar} alt="avatar"/>
                            <p>{props.user.name} {props.user.lastname}</p>
                        </div>
                        <div className={style.bio}>
                            <p>{props.user.status}</p>
                        </div>
                    </div>
                    {props.user.album
                        ?   <div className={style.photos}>
                                <div className={style.title}>
                                    <p>My photos:</p>
                                </div>
                                <div className={style.gallery}>
                                    {
                                        props.user.album.map((i, index) => <img src={i} alt="album item" key={index} className={style.albumItem} />)
                                    }
                                </div>
                            </div>
                        :   null
                    }
                </div>
}

export default Profile;