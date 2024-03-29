import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";
import { useRouter } from "next/router";
import axios from "axios";

export default function CadastroCandidatura() {
  const [usuarios, setUsuarios] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [newCandidatura, setNewCandidatura] = useState({ usuarioId: "", vagaId: "", data_Candidatura: "" });
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const usuariosResponse = await axios.get("https://apijobteens.somee.com/api/usuarios");
        const vagasResponse = await axios.get("https://apijobteens.somee.com/api/vagas");

        setUsuarios(usuariosResponse.data);
        setVagas(vagasResponse.data);
      } catch (error) {
        console.error("Erro ao buscar a lista de usuários ou vagas:", error);
      }
    };

    getData();
  }, []);

  const handleInputChange = (e) => {
    setNewCandidatura({ ...newCandidatura, [e.target.name]: e.target.value });
  };

  const handleAddCandidatura = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://apijobteens.somee.com/api/candidaturas", newCandidatura);
      router.push("/candidatura");
    } catch (error) {
      alert("Erro ao inserir a candidatura:" + error);
    }
  };

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
                Selecione a usuário
              </label>
              <select className="form-select" id="usuarioId" name="usuarioId" value={newCandidatura.usuarioId} onChange={handleInputChange}>
                <option>Selecione uma opção</option>
                {usuarios.map((usuario) => (
                  <option value={usuario.usuarioId} key={usuario.usuarioId}>
                    {usuario.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="vagaId" className="form-label">
                Selecione o cargo desejado
              </label>
              <select className="form-select" id="vagaId" name="vagaId" value={newCandidatura.vagaId} onChange={handleInputChange}>
                <option>Selecione uma opção</option>
                {vagas.map((vaga) => (
                  <option value={vaga.vagaId} key={vaga.vagaId}>
                    {vaga.empresa.nome_Empresa} - {vaga.cargo}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="data_Candidatura" className="form-label">
                Data da candidatura
              </label>
              <input type="datetime-local" className="form-control" id="data_Candidatura" name="data_Candidatura" value={newCandidatura.data_Candidatura} onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <button onClick={(e) => handleAddCandidatura(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
