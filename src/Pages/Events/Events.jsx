import data from './data.json'
import styles from './Events.module.scss'
import { Header } from '../../Components/Header/Header'
const Events = () => {
    return (
        <div className={styles.main}>

            <Header title="EVENTS" />

            <div className={styles.phoolTema}>

                    <img id={styles.phoolRight} src="src/Assets/flowerbrown.png" alt="" />
                    <img id={styles.phoolLeft} src="src/assets/flower.png" alt="" />

            </div>
            <div className={styles.content}>{data.content}</div>

        </div>




    )
}

export default Events;