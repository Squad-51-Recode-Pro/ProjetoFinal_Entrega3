import Head from "next/head";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>JobTeens | Sobre nós</title>
      </Head>

      <section>
        <div className={`container-fluid ${styles.bgSobre}`}>
          <h1 className="container">Conectando Jovens ao Sucesso Profissional</h1>
        </div>
        <div className={`container ${styles.section_about}`}>
          <h1>
            Sobre a <strong>JobTeens</strong>
          </h1>
          <p className={`${styles.paragrafy}`}>Somos um espaço criado especialmente para jovens como você, que estão buscando oportunidades incríveis de emprego e qualificação para alcançar seus sonhos. Acreditamos que todos merecem ter a chance de crescer profissionalmente, independentemente da renda ou das circunstâncias.</p>
        </div>
        <div className={`container ${styles.content_about}`}>
          <h2>Nossa Missão</h2>
          <p className={`${styles.paragrafy}`}>É conectar jovens talentosos, como você, a empregadores que valorizam o potencial e a energia que os jovens trazem para o mercado de trabalho. Queremos ser a ponte que leva você ao emprego dos seus sonhos, oferecendo uma plataforma intuitiva e acessível para fazer o seu cadastro e encontrar vagas que combinem com o seu perfil.</p>
          <p className={`${styles.paragrafy}`}>
            Para os empregadores, nosso objetivo é facilitar a busca por jovens talentos promissores. Com nosso sistema de cadastro simples e eficiente, você poderá encontrar candidatos altamente motivados e com vontade de aprender, contribuindo para o crescimento e sucesso da sua empresa. Estamos comprometidos em apoiar você em todas as etapas da sua jornada profissional. Além de oferecer
            oportunidades de emprego, também fornecemos recursos valiosos de qualificação, cursos e projetos que ajudarão a aprimorar suas habilidades e aumentar suas chances de sucesso no mercado de trabalho.
          </p>
          <h5>Aqui, a sua história é importante para nós!</h5>
          <p className={`${styles.paragrafy}`}>
            Queremos saber o que você conquistou e como podemos ajudar ainda mais. Mensalmente, estaremos em contato através de formulários de pesquisa para acompanhar o seu progresso e entender como podemos melhorar ainda mais nossos serviços. Nosso compromisso é com você, jovem talento, e com os recrutadores que confiam em nós para encontrar os melhores candidatos. Juntos, estamos construindo um
            futuro brilhante para todos. Seja bem-vindo ao JobTeens, o lugar onde as oportunidades se encontram com o talento! Estamos ansiosos para fazer parte da sua história de sucesso. Vamos juntos nessa jornada!
          </p>
          <h4>Contate-nos</h4>
          <div className="row">
            <div className={`col-md-4 ${styles.container_contact}`}>
              <span className={styles.icon_contact}>
                <LuPhone />
              </span>
              <p>(00) 99999-9999</p>
            </div>
            <div className={`col-md-3 ${styles.container_contact}`}>
              <span className={styles.icon_contact}>
                <MdOutlineMailOutline />
              </span>
              <p>contato@jobteens.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
