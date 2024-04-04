import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Details</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" 
                                    alt="" 
                                    width={40} 
                                    height={40} 
                                    className={styles.userimage}
                                /> 
                                Paolo Galang
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>05.23.2024</td>
                        <td>1601-C</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" 
                                    alt="" 
                                    width={40} 
                                    height={40} 
                                    className={styles.userimage}
                                />
                                Daniel del Moral 
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>05.23.2024</td>
                        <td>1604-E</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" 
                                    alt="" 
                                    width={40} 
                                    height={40} 
                                    className={styles.userimage}
                                /> 
                                Paolo Galang
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>05.23.2024</td>
                        <td>Business Registration</td>
                    </tr>
                    <tr>
                        <td>
                           <div className={styles.user}>
                                <Image src="/noavatar.png" 
                                    alt="" 
                                    width={40} 
                                    height={40} 
                                    className={styles.userimage}
                                />
                                Daniel del Moral 
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>05.23.2024</td>
                        <td>Business Permit Renewal</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions