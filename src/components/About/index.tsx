import Image from 'next/image'

import styles from "./about.module.scss"

import barbearia from "../../assets/images.svg"

export function About() {
    return (
        <>
            {/* ABOUT */}

            <section className={styles.about}>
                <div className={styles.aboutcontent}>
                    <div className={styles.aboutimg}>
                        <Image
                            src={barbearia}
                            alt="Fotos da Baberaria"
                        />
                    </div>

                    <div className={styles.aboutdescrption}>
                        <h2>Sobre</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus.
                            Non duis augue eros mattis a quis sem sodales.</p>
                        <p>Horário de funcionamento: <strong>09:00</strong> ás <strong>19:00</strong></p>
                    </div>
                </div>
            </section>
        </>
    )
}