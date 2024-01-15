import Head from "next/head";
import React from "react";
import styles from "@/styles/Form.module.css";

export default function CadastroCandidatura() {
  return (
    <>
      <Head>
        <title>JobTeens | Cadastro Candidatura</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Candidatar-se</h1>
          <p> Candidate-se e faça parte do futuro que você deseja construir</p>
          <form className={styles.form}>

            <div className="mb-3">
              <label htmlFor="usuarioId" className="form-label">
                Selecione o usuário
              </label>
              <select className="form-select" id="usuarioId" name="usuarioId">
                <option>Selecione uma opção</option>
              </select>
            </div>
           
            <div className="mb-3">
              <label htmlFor="vagaId" className="form-label">
                Selecione a vaga
              </label>
              <select className="form-select" id="vagaId" name="vagaId">
                <option>Selecione uma opção</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="data_Candidatura" className="form-label">
                Data da candidatura
              </label>
              <input type="datetime-local" className="form-control" id="data_Candidatura" name="data_Candidatura" />
            </div>
            
            <div className="mb-3">
              <button>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
