import Head from "next/head";
import styles from "@/styles/Vaga.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdLocate, IoIosCalendar } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import Link from "next/link";

export default function Vaga() {
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

  const formatSalario= (valor) => {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <Head>
        <title>JobTeens | Vagas</title>
      </Head>

      <section className={`container ${styles.content_section_vacancies}`}>
        <div className={styles.container_create}>
          <h1>Vagas</h1>
          <Link href={"vaga/cadastro"} className={styles.btn_create}>
            Cadastrar
          </Link>
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
                  <div className="d-flex gap-2">
                    <Link className={styles.btn_edit} href={`/update-vaga/${vaga.vagaId}`} >
                      Editar
                    </Link>
                    <Link className={styles.btn_delete} href={"/candidatura"}>
                      Excluir
                    </Link>
                  </div>
                </div>
                <div className={styles.footer_card}>
                  <IoIosCalendar className={styles.icon_card_three} /> <small className="text-muted">{new Date(vaga.data_Publicacao).toLocaleString("pt-BR")}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
