import Head from "next/head";
import styles from "@/styles/Tables.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const formatSalario = (valor) => {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <Head>
        <title>JobTeens | Vagas</title>
      </Head>

      <section className={`container ${styles.container_section_table}`}>
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.container_create}>
              <h1>Vagas</h1>
              <Link href={"vaga/cadastro"} className={styles.btn_create}>
                Cadastrar
              </Link>
            </div>
            <div className={`card border-0 shadow rounded-4 py-2 px-3`}>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-borderless">
                    <thead className="card-header">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Localidade</th>
                        <th scope="col">Sálario</th>
                        <th scope="col">Requisitos</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data de Publicação</th>
                        <th scope="col">Opções</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vagas.map((vaga) => (
                        <tr scope="row" key={vaga.vagaId}>
                          <td>{vaga.vagaId}</td>
                          <td>{vaga.empresa.nome_Empresa}</td>
                          <td>{vaga.cargo}</td>
                          <td>{vaga.localidade}</td>
                          <td> {formatSalario(vaga.salario)}</td>
                          <td>{vaga.requisitos}</td>
                          <td>{vaga.descricao}</td>
                          <td>{vaga.data_Publicacao}</td>
                          <td className="d-flex gap-2">
                            <Link className={styles.btn_edit} href={`vaga/update-vaga/${vaga.vagaId}`}>
                              Editar
                            </Link>
                            <Link className={styles.btn_delete} href={`vaga/delete-vaga/${vaga.vagaId}`}>
                              Excluir
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
