import styles from './AddImage.module.css'
import foto from '../assets/images/homemceu.jpeg'


export function AddImage (){

    return(

        <>
            <header className={styles.headerAddImage}>
                <h4 className={styles.headerBrand}>Alzhma</h4>
                <nav className={styles.headerNav}>
                    <p>Jogo</p>
                    <p>Resumo</p>
                    <p>Sair</p>
                </nav>

            </header>
            <main className={styles.mainAddImage}>
                <h4 className={styles.textmainAddImage}>Adicione uma Foto</h4>
                <div className={styles.cardAddImage}>
                   
                    <img className={styles.cardImageAddImage} src={foto} alt="" />
                   
                    <div className={styles.cardTextAddImage}>
                        <p>Categoria Pessoa : Carlos eduardo dias ferreira de Vasconcellos </p>
                        <p>Categoria Família : </p>
                        <p>Categoria Local : </p>
                        <p>Categoria Evento : </p>
                        <p>Adicionar Foto</p>
                    </div>
          

                </div>

            </main>
        </>
    )
}

          