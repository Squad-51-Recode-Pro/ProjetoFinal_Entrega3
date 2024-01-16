import React from "react";
import styles from "@/styles/Home.module.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaUsersGear, FaIndustry } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function CardAreas() {
  return (
    <>
      <section className={styles.section_content_areas}>
        <div className={`container ${styles.main_heading_areas}`}>
          <h1>
            #<span>Destaque</span> <strong>áreas profissionais</strong>
          </h1>
          <div className="row pt-5 g-2">
            <div className="col-lg-3">
              <div class={`card ${styles.card_areas}`}>
                <div class="card-body">
                  <FaUsersGear className={styles.icon_areas} />
                  <h4 className="text-muted pt-2">Administração</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class={`card ${styles.card_areas}`}>
                <div class="card-body">
                  <HiOutlineDesktopComputer className={styles.icon_areas} />
                  <h4 className="text-muted pt-2">Tecnologia da Informação</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class={`card ${styles.card_areas}`}>
                <div class="card-body">
                  <FaIndustry className={styles.icon_areas} />
                  <h4 className="text-muted pt-2">Industrial e Comércio</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div class={`card ${styles.card_areas}`}>
                <div class="card-body">
                  <TfiHeadphoneAlt className={styles.icon_areas} />
                  <h4 className="text-muted pt-2">Telemarketing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
