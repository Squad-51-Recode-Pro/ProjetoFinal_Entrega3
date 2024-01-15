import Head from "next/head";
import React from "react";
import styles from "@/styles/Form.module.css";

export default function CadastroEmpresa() {
  return (
    <>
      <Head>
        <title>JobTeens | Cadastro Empresa</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Cadastre-se</h1>
          <p>Cadastre sua empresa e dê a chance para jovens talentos</p>

          <form className={styles.form}>
            <div className="mb-3">
              <label htmlFor="nome_Empresa" className="form-label">
                Nome da empresa
              </label>
              <input type="text" className="form-control" id="nome_Empresa" name="nome_Empresa" placeholder="Informe nome da empresa" />
            </div>

            <div className="mb-3">
              <label htmlFor="email_Coorporativo" className="form-label">
                Email coorporativo
              </label>
              <input type="text" className="form-control" id="email_Coorporativo" name="email_Coorporativo" placeholder="Informe email coorporativo" />
            </div>

            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">
                CNPJ
              </label>
              <input type="text" className="form-control" id="cnpj" name="cnpj" placeholder="Informe o CNPJ" />
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input type="text" className="form-control" id="endereco" name="endereco" placeholder="Informe endereço" />
            </div>

            <div className="mb-3">
              <label htmlFor="area_Atuacao" className="form-label">
                Área de Atuação
              </label>
              <textarea className="form-control" id="area_Atuacao" name="area_Atuacao" placeholder="Informe área de atuação" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Senha
              </label>
              <input type="text" className="form-control" id="senha" name="senha" placeholder="Informe uma senha" />
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
