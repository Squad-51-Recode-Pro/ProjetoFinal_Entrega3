import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/Form.module.css";
import { useRouter } from "next/router";
import axios from "axios";

export default function CadastroEmpresa() {
  const [newEmpresa, setNewEmpresa] = useState({ nome_Empresa: "", email_Coorporativo: "", cnpj: "", endereco: "", area_Atuacao: "", senha: ""});
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewEmpresa({ ...newEmpresa, [e.target.name]: e.target.value });
  };

  const handleAddEmpresa = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://apijobteens.somee.com/api/empresas", newEmpresa);
      router.push("/empresa");
    } catch (error) {
      alert("Erro ao inserir a empresa:" + error);
    }
  };

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
              <input type="text" className="form-control" id="nome_Empresa" name="nome_Empresa" value={newEmpresa.nome_Empresa} 
              onChange={handleInputChange} placeholder="Informe nome da empresa" />
            </div>

            <div className="mb-3">
              <label htmlFor="email_Coorporativo" className="form-label">
                Email coorporativo
              </label>
              <input type="text" className="form-control" id="email_Coorporativo" name="email_Coorporativo" value={newEmpresa.email_Coorporativo} 
              onChange={handleInputChange} placeholder="Informe email coorporativo" />
            </div>

            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">
                CNPJ
              </label>
              <input type="text" className="form-control" id="cnpj" name="cnpj" value={newEmpresa.cnpj} 
              onChange={handleInputChange} placeholder="Informe o CNPJ" />
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input type="text" className="form-control" id="endereco" name="endereco" value={newEmpresa.endereco} 
              onChange={handleInputChange}  placeholder="Informe endereço" />
            </div>

            <div className="mb-3">
              <label htmlFor="area_Atuacao" className="form-label">
                Área de Atuação
              </label>
              <textarea className="form-control" id="area_Atuacao" name="area_Atuacao" value={newEmpresa.area_Atuacao} 
              onChange={handleInputChange} placeholder="Informe área de atuação" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Senha
              </label>
              <input type="text" className="form-control" id="senha" name="senha" 
              value={newEmpresa.senha} 
              onChange={handleInputChange} placeholder="Informe uma senha" />
            </div>

            <div className="mb-3">
            <button onClick={(e) => handleAddEmpresa(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
