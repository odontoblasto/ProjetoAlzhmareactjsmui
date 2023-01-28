import styles from './Home.module.css'
import foto from '../assets/images/homemceu.jpeg'


export function Home(){

    return(
        <>
        
        <header className={styles.headerHome}>
            <h4 className={styles.headerBrand}>Alzhma</h4>
            <nav className={styles.headerNav}>
                <p>Registro</p>
                <p>Login</p>
            </nav>

        </header>
        <main className={styles.mainHome}>

            <div className={styles.textMainHome}>
                <p><quote>Em homenagem à Sra. Rosa Maria, faleceu dia 01/06/2022, vítima de Alzheimer</quote></p>

            </div>
            <div className={styles.imgMainHome}>
                <img className={styles.imgHome} src={foto} alt="" />
            </div>

        </main>
        </>

    )
}