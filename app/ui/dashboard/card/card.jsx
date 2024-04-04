import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card = () => {
    return(
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.texts}>
                <span className={styles.title}>Deadlines for Today</span>
                <span className={styles.item}>VAT</span>
                <span className={styles.item}>Non VAT</span>
                <span className={styles.detail}>for Kingston</span>
            </div>
        </div>
    )
}

export default Card