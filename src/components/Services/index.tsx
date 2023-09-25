
import Image from 'next/image'
import styles from './services.module.scss'

import corte1 from '../../assets/corte1.png'
import corte2 from '../../assets/corte2.png'
import corte3 from '../../assets/corte3.png'

export function Services(){
    return(
        <>
            <section className={styles.services}>
                <div className={styles.servicecontent}>
                    <h2>Serviços</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. 
                        Non duis augue eros mattis a quis sem sodales.</p>
                </div>

                <section className={styles.haircuts}>
                    <div className={styles.haircut}>
                        <Image
                            src={corte1}
                            alt="Corte Normal"
                        />
                        <div className={styles.haircutinfo}>
                            <strong>Corte Normal</strong>
                            <button>
                                R$ 45,00
                            </button>
                        </div>
                    </div>
                    
                    <div className={styles.haircut}>
                        <Image
                            src={corte2}
                            alt="Corte a barba"
                        />
                        <div className={styles.haircutinfo}>
                            <strong>Corte de Barba</strong>
                            <button>
                                R$ 35,00
                            </button>
                        </div>
                    </div>

                    <div className={styles.haircut}>
                        <Image
                            src={corte3}
                            alt="Corte a barba e cabelo"
                        />
                        <div className={styles.haircutinfo}>
                            <strong>Corte Barba e Cabelo</strong>
                            <button>
                                R$ 80,00
                            </button>
                        </div>
                    </div>
                </section>
                <div>
                <h2>Venha conhecer</h2>
            </div>
            </section>
        </>
    )
}