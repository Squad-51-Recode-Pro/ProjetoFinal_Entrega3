import React from 'react'
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import styles from '../styles/Carreira.module.css'
import Head from "next/head";
export default function Carreira() {
  return (
    <>
    <Head>
        <title>JobTeens | Carreiras</title>
    </Head>
  <main>
    <section className={`container-fluid ${styles.bgProjeto} px-4`}>
      <h1>Trilha do sucesso</h1>
      <p>
        Explore oportunidades gratuitas que podem impulsionar sua carreira
        profissional!
      </p>
    </section>
    <section className="container-fluid py-5 px-4">
      <h2>Tudo sobre projetos e cursos</h2>
      <article>
        <div className="row">
          <div className="col-sm-12">
            <div className={`card ${styles.carcard_wrapper} mt-4 mb-3 shadow border-0`}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="/img/img_card_projeto_recode.png"
                    className={`${styles.img_card_projeto}`}
                    alt="recode"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h2 className="card-title font-color-card">Recode</h2>
                      <a href="#" className="ancora-card">
                      <BsArrowUpRightSquare className='fs-4' />
                      </a>
                    </div>
                    <div>
                      <time dateTime="2020-05-25 12:00:00">
                      <FaRegCalendarCheck className='me-2' />
                        25 de Maio 2023 - 2 de Fevereiro 2024
                      </time>
                    </div>
                    <p className="card-text pt-4">
                      A Recode desenvolve diversos projetos e programas que
                      visam capacitar jovens e adultos em habilidades digitais,
                      programação, empreendedorismo e cidadania. Eles oferecem
                      cursos, oficinas e recursos educacionais para ampliar o
                      acesso à tecnologia e empoderar indivíduos por meio da
                      educação digital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card shadow border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="/img/img_card_projeto_educarmais.png"
                    className={`${styles.img_card_projeto}`}
                    alt="educarmais"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h2 className="card-title font-color-card">EducarMais</h2>
                      <a href="#" className="ancora-card">
                        <BsArrowUpRightSquare className='fs-4' />
                      </a>
                    </div>
                    <div>
                      <time dateTime="2020-05-25 12:00:00">
                      <FaRegCalendarCheck className='me-2' />
                        25 de Maio 2023 - 2 de Fevereiro 2024
                      </time>
                    </div>
                    <p className="card-text pt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam aliquam ab nesciunt nobis facilis earum vitae
                      veritatis ut, praesentium blanditiis corporis, nisi odio.
                      Itaque, laborum nam numquam accusantium modi sit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card mt-3 shadow border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="/img/img_card_projeto_progavançar.png"
                    className={`${styles.img_card_projeto}`}
                    alt="programaavançar"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h2 className="card-title font-color-card">
                        ProgramaAvançar
                      </h2>
                      <a href="#" className="ancora-card">
                        <BsArrowUpRightSquare className='fs-4' />
                      </a>
                    </div>
                    <div>
                      <time dateTime="2020-05-25 12:00:00">
                        <FaRegCalendarCheck className='me-2' />
                        02 de Janeiro 2023 - 15 de Abril 2024
                      </time>
                    </div>
                    <p className="card-text pt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat excepturi deleniti labore voluptas. Nemo laboriosam
                      sapiente ducimus? Suscipit similique neque assumenda est
                      quidem, dignissimos doloremque dolore quo, eos dolorem
                      corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card mt-3 shadow border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="img/img_card_projeto_futurocerto.png"
                    className={`${styles.img_card_projeto}`}
                    alt="futurocerto"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h2 className="card-title font-color-card">
                        FuturoCerto
                      </h2>
                      <a href="#" className="ancora-card">
                        <BsArrowUpRightSquare className='fs-4' />
                      </a>
                    </div>
                    <div>
                      <time dateTime="2020-05-25 12:00:00">
                        <FaRegCalendarCheck className='me-2' />
                        02 de Janeiro 2023 - 15 de Abril 2024
                      </time>
                    </div>
                    <p className="card-text pt-4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore reprehenderit hic sequi quod excepturi, labore
                      placeat itaque quo, laboriosam, eligendi consequatur ipsa.
                      Odio doloremque possimus esse repellendus, maxime sequi?
                      Nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card mt-3 mb-5 shadow border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="img/img_card_projeto_agir.png"
                    className={`${styles.img_card_projeto}`}
                    alt="agir"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h2 className="card-title font-color-card">Ágir</h2>
                      <a href="#" className="ancora-card">
                        <BsArrowUpRightSquare className='fs-4' />
                      </a>
                    </div>
                    <div>
                      <time dateTime="2020-05-25 12:00:00">
                        <FaRegCalendarCheck className='me-2' />
                        02 de Janeiro 2023 - 15 de Abril 2024
                      </time>
                    </div>
                    <p className="card-text pt-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni perferendis laborum, dolore atque illo suscipit
                      illum, doloremque nisi consectetur ea delectus accusantium
                      porro! Dicta veritatis consequatur laboriosam, itaque
                      autem vitae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</>

  )
}
