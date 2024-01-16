import React from "react";
import Head from "next/head";
import styles from "@/styles/Vaga.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdLocate, IoIosCalendar, IoIosSearch  } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import Link from "next/link";

export default function Vagas() {
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

  const formatSalario = (price) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <Head>
        <title>JobTeens | Vagas</title>
      </Head>

      <section>
        <div className={styles.background_vaga}>
          <div className={`container ${styles.main_title}`}>
            <h1>Descubra novas possibilidades profissionais</h1>
          </div>
        
        </div>
        <div className={` container ${styles.form_container}`}>
            <form>
              <div className="row g-3">
                <div className="col-lg-10 position-relative">
                <IoIosSearch className={styles.searchIcon} /><input type="text" className="form-control" placeholder="Pesquisar vagas disponíveis" />
                </div>
                <div className="col-lg-2 d-grid">
                  <button>Buscar vaga</button>
                </div>
              </div>
            </form>
          </div>

        <div className="container py-5">
          <div className={`${styles.secondary_title}`}>
            <h2>
              <strong>Vagas</strong> disponíveis
              <hr></hr>
            </h2>
          </div>

          <div className="row g-4 pt-2">
            {vagas.map((vaga) => (
              <div key={vaga.vagaId} className="col-xl-4">
                <div className={`card ${styles.card_wrapper}`}>
                  <div className={styles.header_card}>
                    <BsBuildings className={styles.icon_card} /> {vaga.empresa.nome_Empresa}
                  </div>
                  <div className={`card-body ${styles.body_card}`}>
                    <div>
                      <h5 className="card-title mb-1">{vaga.cargo}</h5>
                      <small className="card-text text-muted">
                        <IoMdLocate className={styles.icon_card_two} /> {vaga.localidade}
                      </small>
                    </div>
                    <div className="mt-3">
                      <p className="card-text text-muted pt-2">{vaga.descricao}</p>
                      <span className="card-text text-muted">
                        <strong>Requisitos: </strong> {vaga.requisitos}
                      </span>
                      <p className="card-text text-muted pt-2">
                        <strong>Salário: </strong> {formatSalario(vaga.salario)}
                      </p>
                    </div>
                    <Link className={`btn ${styles.btn_apply}`} href={"candidatura/cadastro"}>
                      Candidate-se
                    </Link>
                  </div>

                  <div className={styles.footer_card}>
                    <IoIosCalendar className={styles.icon_card_three} /> <small className="text-muted">{new Date(vaga.data_Publicacao).toLocaleString("pt-BR")}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
