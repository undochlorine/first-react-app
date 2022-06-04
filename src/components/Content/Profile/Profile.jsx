import React from "react";
import style from './Profile.module.css'

const Profile = () => {
    const images = [
        {src: "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/2332/people-persons-peoples.jpg?itok=OXWARzCz", alt: "p1"},
        {src: "https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg", alt: "p2"},
        {src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?quality=75&width=982&height=726&auto=webp", alt: "p3"},
        {src: "https://personalexcellence.co/files/5-people.jpg", alt: "p4"},
        {src: "https://i.insider.com/5cb8b133b8342c1b45130629?width=700", alt: "p5"}
    ]

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
                        images.map(i => <img src={i.src} alt={i.alt} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;