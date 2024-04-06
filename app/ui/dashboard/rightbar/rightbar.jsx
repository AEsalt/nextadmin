import styles from './rightbar.module.css'

const Rightbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>URGENT</span>
                    <h3 className={styles.title}>Ergon Steelworks SOA</h3>
                    <span className={styles.subtitle}>Mrs. Ignacio will explain further details</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>Quota for Today</span>
                    <h3 className={styles.title}>Finish remaining ITR</h3>
                    <span className={styles.subtitle}>Submit all reports to Mr. Tan</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Rightbar