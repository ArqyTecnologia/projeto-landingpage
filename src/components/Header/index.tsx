import * as React from 'react'
import Image from 'next/image'

import styles from "./header.module.scss"

import logo from "../../assets/logo.svg"



export function Header() {
  return (

    <>

      <header>
        {/* <div className={styles.container}> */}
        <nav className={styles.headercontent}>
          <div className={styles.headericons} >
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


          <div className={styles.headerlogo}>
            <Image
              src={logo}
              alt='Logo da Barbearia'
            />
          </div>


          <div>
            <a className={styles.headerbutton} href="http://api.whatsapp.com/send?phone=557799368963&text=Quero%20fazer%20orçamento%20da%20LandignPage!">
              Agendar um horario
            </a>
          </div>
        </nav>


        <main className={styles.hero}>
          <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
          <p>Horário de funcionamento: 09:00 ás 19:00</p>
          <a href="http://api.whatsapp.com/send?phone=557799368963&text=Quero%20fazer%20orçamento%20da%20LandignPage!" className={styles.buttoncontact} target="_blank">
            Agendar horário
          </a>
        </main>
        {/* </div> */}

      </header>

    </>
  )
}