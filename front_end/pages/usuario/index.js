import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Tables.module.css";
import axios from "axios";
import Link from "next/link";

export default function Usuario() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/usuarios")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de usuários:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>JobTeens | Usuários</title>
      </Head>
      <section className={`container ${styles.container_section_table}`}>
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.container_create}>
              <h1>Usuários</h1>
              <Link href={"usuario/cadastro"} className={styles.btn_create}>
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
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Opções</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.map((usuario) => (
                        <tr scope="row" key={usuario.usuarioId}>
                          <td>{usuario.usuarioId}</td>
                          <td>{usuario.nome}</td>
                          <td>{usuario.email}</td>
                          <td>{usuario.cpf}</td>
                          <td>{usuario.telefone}</td>
                          <td>{usuario.endereco}</td>
                          <td className="d-flex gap-2">
                            <Link className={styles.btn_edit} href={`usuario/update-user/${usuario.usuarioId}`}>
                              Editar
                            </Link>
                            <Link className={styles.btn_delete} href={`usuario/delete-user/${usuario.usuarioId}`}>
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
