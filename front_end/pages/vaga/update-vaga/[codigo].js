import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";

export default function UpdateVaga() {
  const [empresas, setEmpresas] = useState([]);
  const [vaga, setVaga] = useState({ vagaId: "", cargo: "", localidade: "", salario: 0, data_Publicacao: "", empresaId: 0, requisitos: "", descricao: "" });
  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    const getData = async () => {
      try {
        const empresaResponse = await axios.get("https://apijobteens.somee.com/api/empresas");
        setEmpresas(empresaResponse.data);
      } catch (error) {
        console.error("Erro ao buscar a lista de empresas:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/vagas/" + codigo)
      .then((response) => {
        setVaga(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes da vaga:", error);
      });
  }, [codigo]);
  

  const handleInputChange = (e) => {
    setVaga((prevVaga) => ({ ...prevVaga, [e.target.name]: e.target.value }));
  };

  const handleUpdateVaga = async (e) => {
    e.preventDefault();
    try {
      await axios.put("https://apijobteens.somee.com/api/vagas/" + vaga.vagaId, vaga);
      router.push("/vaga");
    } catch (error) {
      console.error("Erro ao atualizar vaga:", error);
    }
  };
 

  return (
    <>
      <Head>
        <title>JobTeens | Atualizar Vaga</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Editar</h1>
          <p>
            Contribua para o futuro
            <br />
            Cadastre oportunidades de emprego para jovens talentos
          </p>
          <form className={styles.form}>
          <input type="text" hidden className="form-control" name="vagaId" value={codigo} onChange={handleInputChange} />
            <div className="mb-3">
              <label htmlFor="cargo" className="form-label">
                Nome do cargo
              </label>
              <input type="text" className="form-control" id="cargo" name="cargo" value={vaga.cargo} onChange={handleInputChange} placeholder="Informe o nome do cargo" />
            </div>

            <div className="mb-3">
              <label htmlFor="localidade" className="form-label">
                Localidade
              </label>
              <input type="text" className="form-control" id="localidade" name="localidade" value={vaga.localidade} onChange={handleInputChange} placeholder="Informe o local da vaga" />
            </div>

            <div className="mb-3">
              <label htmlFor="salario" className="form-label">
                Valor do salário
              </label>
              <input type="text" className="form-control" id="salario" name="salario" value={vaga.salario} onChange={handleInputChange} placeholder="Informe o valor do salario" />
            </div>

            <div className="mb-3">
              <label htmlFor="data_Publicacao" className="form-label">
                Data de publicação
              </label>
              <input type="datetime-local" id="data_Publicacao" className="form-control" name="data_Publicacao" value={vaga.data_Publicacao} onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="empresaId" className="form-label">
                Selecione a empresa
              </label>
              <select className="form-select" id="empresaId" name="empresaId" value={vaga.empresaId} onChange={handleInputChange}>
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
              <textarea className="form-control" id="requisitos" name="requisitos" value={vaga.requisitos} onChange={handleInputChange} placeholder="Informe os requisitos" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>
              <textarea 
              className="form-control" 
              id="descricao" 
              name="descricao" 
              value={vaga.descricao} onChange={handleInputChange}
              placeholder="Informe a descrição" 
              rows="3">
              </textarea>
            </div>

            <div className="mb-3">
            <button onClick={(e) => handleUpdateVaga(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
