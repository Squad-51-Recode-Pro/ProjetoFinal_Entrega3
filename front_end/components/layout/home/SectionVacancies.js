import React from "react";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdLocate } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";

export default function CarouselCard() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/vagas")
      .then((response) => {
        setVagas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de vagas:", error);
      });
  }, []);

  return (
    <>
      <section className={styles.section_content}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7 order-lg-last">
              <h1>
                Temos milhares de <strong className={styles.main_heading}>oportunidades</strong> para você!
              </h1>
              <p>Descubra o caminho para o sucesso profissional explorando as diversas oportunidades que temos disponíveis para você. Cada oportunidade é uma porta aberta para crescimento e realizações.</p>
            </div>

            <div className="col-lg-5">
              <div id="mycarousel2" className={`carousel slide carousel-fade ${styles.card_hover}`} data-bs-ride="carousel">
                <div className="carousel-inner shadow rounded-4">
                  {vagas.map((vaga) => (
                    <div key={vaga.vagaId} className="carousel-item active">
                      <div className="card rounded-4 border-0" style={{ minHeight: "19em", overflow: "hidden" }}>
                        <div className={`card-header ${styles.header_carousel_card}`}>
                          <BsBuildings className={styles.icon_carousel_card} /> {vaga.empresa.nome_Empresa}
                        </div>
                        <div className={`card-body ${styles.body_carousel_card}`}>
                          <div>
                            <h5 className="card-title mb-1">{vaga.cargo}</h5>
                            <small className="card-text text-muted">
                              <IoMdLocate className={styles.icon_carousel_card_two} /> {vaga.localidade}
                            </small>
                          </div>
                          <div className="mt-3">
                            <p className="card-text text-muted">
                              <strong>Requisitos: </strong> {vaga.requisitos}
                            </p>
                            <span className="card-text text-muted pt-2">{vaga.descricao}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel2" data-bs-slide="prev">
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mycarousel2" data-bs-slide="next">
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
