import React from "react";
import Head from "next/head";
import styles from "@/styles/Form.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function CadastroVaga() {
  const [empresas, setEmpresas] = useState([]);
  const [newVaga, setNewVaga] = useState({ cargo: "", localidade: "", salario: 0, data_Publicacao: "", empresaId: 0, requisitos: "", descricao: "" });
  const router = useRouter();

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

  const handleInputChange = (e) => {
    setNewVaga({ ...newVaga, [e.target.name]: e.target.value });
  };

  const handleAddVaga = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://apijobteens.somee.com/api/vagas", newVaga);
      router.push("/vaga");
    } catch (error) {
      alert("Erro ao inserir a vaga:" + error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Cadastro Vaga</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Cadastrar Vaga</h1>
          <p>
            Contribua para o futuro
            <br />
            Cadastre oportunidades de emprego para jovens talentos
          </p>
          <form className={styles.form}>
            <div className="mb-3">
              <label htmlFor="cargo" className="form-label">
                Nome do cargo
              </label>
              <input type="text" className="form-control" id="cargo" name="cargo" value={newVaga.cargo} onChange={handleInputChange} placeholder="Informe o nome do cargo" />
            </div>

            <div className="mb-3">
              <label htmlFor="localidade" className="form-label">
                Localidade
              </label>
              <input type="text" className="form-control" id="localidade" name="localidade" value={newVaga.localidade} onChange={handleInputChange} placeholder="Informe o local da vaga" />
            </div>

            <div className="mb-3">
              <label htmlFor="salario" className="form-label">
                Valor do salário
              </label>
              <input type="text" className="form-control" id="salario" name="salario" value={newVaga.salario} onChange={handleInputChange} placeholder="Informe o valor do salario" />
            </div>

            <div className="mb-3">
              <label htmlFor="data_Publicacao" className="form-label">
                Data de publicação
              </label>
              <input type="datetime-local" id="data_Publicacao" className="form-control" name="data_Publicacao" value={newVaga.data_Publicacao} onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="empresaId" className="form-label">
                Selecione a empresa
              </label>
              <select className="form-select" id="empresaId" name="empresaId" value={newVaga.empresaId} onChange={handleInputChange}>
                <option>Selecione uma opção</option>
                {empresas.map((empresa) => (
                  <option value={empresa.empresaId} key={empresa.empresaId}>
                    {empresa.nome_Empresa}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="requisitos" className="form-label">
                Requisitos
              </label>
              <textarea className="form-control" id="requisitos" name="requisitos" value={newVaga.requisitos} onChange={handleInputChange} placeholder="Informe os requisitos" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>
              <textarea 
              className="form-control" 
              id="descricao" 
              name="descricao" 
              value={newVaga.descricao} 
              onChange={handleInputChange} 
              placeholder="Informe a descrição" 
              rows="3">
              </textarea>
            </div>

            <div className="mb-3">
              <button onClick={(e) => handleAddVaga(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
