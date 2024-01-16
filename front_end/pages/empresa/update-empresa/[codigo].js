import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";

export default function UpdateEmpresa() {
  const [empresa, setEmpresa] = useState({ empresaId: "", nome_Empresa: "", email_Coorporativo: "", cnpj: "", endereco: "", area_Atuacao: "", senha: "" });
  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/empresas/" + codigo)
      .then((response) => {
        setEmpresa(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do empresas:", error);
      });
  }, [codigo]);

  const handleInputChange = (e) => {
    setEmpresa((prevEmpresa) => ({ ...prevEmpresa, [e.target.name]: e.target.value }));
  };

  const handleUpdateEmpresa = async (e) => {
    e.preventDefault();
    try {
      await axios.put("https://apijobteens.somee.com/api/empresas/" + empresa.empresaId, empresa);
      router.push("/empresa");
    } catch (error) {
      console.error("Erro ao atualizar empresa:", error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Atualizar Empresa</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Editar</h1>
          <p>Forneça novos dados cadastrais para a atualização</p>
          <form className={styles.form}>
            <input type="text" hidden className="form-control" name="empresaId" value={codigo} onChange={handleInputChange} />
            <div className="mb-3">
              <label htmlFor="nome_Empresa" className="form-label">
                Nome da empresa
              </label>
              <input type="text" className="form-control" id="nome_Empresa" name="nome_Empresa" value={empresa.nome_Empresa} onChange={handleInputChange} placeholder="Informe nome da empresa" />
            </div>

            <div className="mb-3">
              <label htmlFor="email_Coorporativo" className="form-label">
                Email coorporativo
              </label>
              <input type="text" className="form-control" id="email_Coorporativo" name="email_Coorporativo" value={empresa.email_Coorporativo} onChange={handleInputChange} placeholder="Informe email coorporativo" />
            </div>

            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">
                CNPJ
              </label>
              <input type="text" className="form-control" id="cnpj" name="cnpj" value={empresa.cnpj} onChange={handleInputChange} placeholder="Informe o CNPJ" />
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input type="text" className="form-control" id="endereco" name="endereco" value={empresa.endereco} onChange={handleInputChange} placeholder="Informe endereço" />
            </div>

            <div className="mb-3">
              <label htmlFor="area_Atuacao" className="form-label">
                Área de Atuação
              </label>
              <textarea className="form-control" id="area_Atuacao" name="area_Atuacao" value={empresa.area_Atuacao} onChange={handleInputChange} placeholder="Informe área de atuação" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Senha
              </label>
              <input type="text" className="form-control" id="senha" name="senha" value={empresa.senha} onChange={handleInputChange} placeholder="Informe uma senha" />
            </div>

            <div className="mb-3">
              <button onClick={(e) => handleUpdateEmpresa(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
