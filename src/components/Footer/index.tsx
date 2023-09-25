import Image from 'next/image'

import styles from './footer.module.scss'

import logo from "../../assets/logo.svg"
import whatsapp from "../../assets/whatssapp.svg"

export function Footer() {
    return (
        <>
            {/* <div>
                <h2>Venha conhecer</h2>
            </div> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30940.61558860447!2d-41.70781373977659!3d-14.219531813092464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7444d0c32fa380d%3A0x27f3819effccbb8b!2sTerminal%20Rodovi%C3%A1rio%20de%20Brumado!5e0!3m2!1spt-BR!2sbr!4v1695520093433!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                // style="border:0;" 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <footer className={styles.footer}>
                <div className={styles.footericons}>
                    <a href='#'>
                        <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>

                    <a href='#'>
                        <i className="fa-brands fa-facebook fa-2x"></i>
                    </a>

                    <a href='#'>
                        <i className="fa-brands fa-tiktok fa-2x"></i>
                    </a>
                </div>

                <div>
                    <Image
                        src={logo}
                        alt="Logo da Barberia"
                    />
                </div>
                <p>
                    Copyright 2023 | ARQY TECNOLOGIA - Todos os direitos reservados.
                </p>
            </footer>

            {/* Button do Whatsapp */}

            <a
                href="http://api.whatsapp.com/send?phone=557799368963&text=Quero%20fazer%20orçamento%20da%20LandignPage!"
                className={styles.btwhatsapp}
                target='_blank'
            >
                <Image
                    src={whatsapp}
                    alt='Botao WhatsApp'
                />
                <span className={styles.tooltiptext}>
                    Agende seu horario
                </span>

            </a>

        </>
    )
}