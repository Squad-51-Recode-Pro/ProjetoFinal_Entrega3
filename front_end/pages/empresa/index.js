import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Tables.module.css";

export default function Empresa() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/empresas")
      .then((response) => {
        setEmpresas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de empresas:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>JobTeens | Empresas</title>
      </Head>
      <section className={`container ${styles.container_section_table}`}>
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.container_create}>
              <h1>Empresas</h1>
              <Link href={"empresa/cadastro"} className={styles.btn_create}>
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
                        <th scope="col">E-mail</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Área de atuação</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Opções</th>
                      </tr>
                    </thead>
                    <tbody>
                      {empresas.map((empresa) => (
                        <tr scope="row" key={empresa.empresaId}>
                          <td>{empresa.empresaId}</td>
                          <td>{empresa.nome_Empresa}</td>
                          <td>{empresa.email_Coorporativo}</td>
                          <td>{empresa.cnpj}</td>
                          <td>{empresa.area_Atuacao}</td>
                          <td>{empresa.endereco}</td>
                          <td className="d-flex gap-2">
                            <Link className={styles.btn_edit} href={""}>
                              Editar
                            </Link>
                            <Link className={styles.btn_delete} href={""}>
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
