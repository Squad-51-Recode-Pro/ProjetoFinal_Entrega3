import React from "react";
import styles from "../styles/Carreira.module.css";
import Head from "next/head";
import Link from "next/link";
export default function Carreira() {
  return (
    <>
      <Head>
        <title>JobTeens | Carreira</title>
      </Head>

      <section className={`container-fluid ${styles.background_carreira}`}>
        <div className="container">
          <h1>Explore oportunidades gratuitas</h1>
          <h5>E impulsione sua carreira profissional!</h5>
        </div>
      </section>
      <section className={`container ${styles.container_carreira}`}>
        <h2>Cursos</h2>
        <div className="row pt-4 g-3 pb-5">
          <div className="col-lg-4">
            <div className={`card ${styles.card_wrapper}`}>
              <div className="card-body">
                <small className="text-muted">Capacitação profissional</small>
                <h5 className="card-title pt-2">Comitê para a Democratização da Informática</h5>
                <h6>Organização de impacto social que promove a capacitação tecnológica de comunidades de baixa renda</h6>
                <Link href={"/"}>Saiba mais</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`card ${styles.card_wrapper}`}>
              <div className="card-body">
                <small className="text-muted">Capacitação profissional</small>
                <h5 className="card-title pt-2">Promoção educação executiva gratuita em diversas áreas</h5>
                <h6> Instituição brasileira de ensino superior promove cursos a distância de curta e média duração</h6>
                <Link href={"/"}>Saiba mais</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`card ${styles.card_wrapper}`}>
              <div className="card-body">
                <small className="text-muted">Capacitação profissional</small>
                <h5 className="card-title pt-2">Escola Nacional de Administração Pública </h5>
                <h6>Oferece formação e aperfeiçoamento profissional, ofertando uma diversidade de cursos online </h6>
                <Link href={"/"}>Saiba mais</Link>
              </div>
            </div>
          </div>
        </div>

        <h2>Projetos Sociais</h2>

        <div className="row pt-4 g-3">
          <div className="col-lg-4">
            <div className={`card ${styles.card_wrapper}`}>
              <div className="card-body">
                <small className="text-muted">Capacitação profissional</small>
                <h5 className="card-title pt-2">Programa DevELas</h5>
                <h6>Formação focada no público feminino reforçando a representação feminina</h6>
                <Link href={"/"}>Saiba mais</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`card ${styles.card_wrapper}`}>
              <div className="card-body">
                <small className="text-muted">Capacitação profissional</small>
                <h5 className="card-title pt-2">Programa Dev</h5>
                <h6>Programa de formação em tecnologia exclusivo para mulheres</h6>
                <Link href={"/"}>Saiba mais</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`card ${styles.card_wrapper}`}>
              <div className="card-body">
                <small className="text-muted">Capacitação profissional</small>
                <h5 className="card-title pt-2">Projeto BeTech</h5>
                <h6>oportunidade exclusiva para transformação de carreira</h6>
                <Link href={"/"}>Saiba mais</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
