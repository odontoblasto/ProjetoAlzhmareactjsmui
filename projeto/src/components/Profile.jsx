import styles from './Profile.module.css'
import foto from '../assets/images/homemceu.jpeg'

export function Profile (){

    return(

        <>
            <header className={styles.headerProfile}>
                <h4 className={styles.headerBrand}>Alzhma</h4>
                <nav className={styles.headerNav}>
                    <p>Jogo</p>
                    <p>Resumo</p>
                    <p>Sair</p>
                </nav>

            </header>
            <main className={styles.mainProfile}>
                <h4 className={styles.textmainProfile}>Seu Perfil</h4>
                <div className={styles.cardProfile}>
                   
                    <img className={styles.cardImageProfile} src={foto} alt="" />
                   
                    <div className={styles.cardTextProfile}>
                        <p>Categoria Pessoa : Carlos eduardo dias ferreira de Vasconcellos </p>
                        <p>Categoria Família : </p>
                        <p>Categoria Local : </p>
                        <p>Categoria Evento : </p>
                        <p>Adicionar Foto</p>
                    </div>
          

                </div>
                <section className={styles.sectionMainProfile}>
                    <h4 className={styles.textsectionProfile}>Sua Galeria de Fotos</h4>
                    <div className={styles.groupCardImages}>
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    <img className={styles.cardImageGroupCard} src={foto} alt="" />
                    


                    </div>

                </section>

            </main>
        </>
    )
}