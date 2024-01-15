import React from "react";
import styles from '@/styles/Home.module.css';
import { BsBuildingCheck } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { VscFeedback } from "react-icons/vsc";
import { PiUsers } from "react-icons/pi";

export default function CardBenefits() {
  return (
    <>
      <section className={`container ${styles.container_section}`}>
        <h2 className={styles.title_card}>Vantagens de estar conosco</h2>
        <div className="row row-cols-1 row-cols-md-4 g-3">
          <div className="col">
            <div className={`card ${styles.card_content}`}>
              <div className="card-body">
                <PiUsers className={styles.icon_card_section} />
                <h6>Vagas exclusivas para jovens talentos</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={`card ${styles.card_content}`}>
              <div className="card-body">
                <FiCheckCircle className={styles.icon_card_section} />
                <h6>Processo de candidatura simplificado</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={`card ${styles.card_content}`}>
              <div className="card-body">
                <BsBuildingCheck className={styles.icon_card_section} />
                <h6>Acesso a empresas e organizações promissoras</h6>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={`card ${styles.card_content}`}>
              <div className="card-body">
                <VscFeedback className={styles.icon_card_section} />
                <h6>Acompanhe o progresso das suas candidaturas</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
