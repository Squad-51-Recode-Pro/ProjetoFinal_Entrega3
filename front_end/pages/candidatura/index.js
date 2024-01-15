import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Tables.module.css'
import { BsTrash3, BsPencilSquare } from "react-icons/bs";

export default function Candidatura() {
  const [candidaturas, setCandidaturas] = useState([]);

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/candidaturas")
      .then((response) => {
        setCandidaturas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de candidaturas:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>JobTeens | Candidaturas</title>
      </Head>
      <section className={`container ${styles.container_section_table}`}>
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.container_create}>
              <h1>Candidaturas</h1>
              <Link href={"candidatura/cadastro"} className={styles.btn_create}>
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
                        <th scope="col">Usuário</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Data da Candidatura</th>
                        <th scope="col">Opções</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidaturas.map((candidatura) => (
                        <tr scope="row" key={candidatura.candidaturaId}>
                          <td>{candidatura.candidaturaId}</td>
                          <td>{candidatura.usuario.nome}</td>
                          <td>{candidatura.vaga.empresa.nome_Empresa}</td>
                          <td>{candidatura.vaga.cargo}</td>
                          <td>{new Date(candidatura.data_Candidatura).toLocaleString("pt-BR")}</td>
                              
                          <td className="d-flex gap-2">
                            <Link className={styles.btn_edit} href={""}> Editar</Link>
                            <Link className={styles.btn_delete} href={""}> Excluir</Link>
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

