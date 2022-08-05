import style from './Loading.module.css'
import loader from '../../../assets/images/loader.png'

const Loading = () => {
    return(
        <div className={style.loader}>
            <img src={loader} alt=""/>
            <p>Loading...</p>
        </div>
    )
}

export default Loading