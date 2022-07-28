import React from "react";
import style from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={style.Main}>
            <div className={style.header}>
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png" alt="avatar"/>
                <div className={style.bio}>
                    <p>Hi, I'm looking for a friends</p>
                </div>
            </div>
            <div className={style.photos}>
                <div className={style.title}>
                    <p>My photos:</p>
                </div>
                <div className={style.gallery}>
                    {
                        props.images.map(i => <img src={i.src} alt={i.alt} key={i.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;