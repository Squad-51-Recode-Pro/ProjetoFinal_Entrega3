import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "@/styles/Form.module.css"

export default function UpdateCandidatura() {
  const [usuarios, setUsuarios] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [candidatura, setCandidatura] = useState({ usuarioId: "", vagaId: "", data_Candidatura: "" });
  const router = useRouter();
  const { codigo } = router.query;
  
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

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/candidaturas/" + codigo)
      .then((response) => {
        setCandidatura(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do candidatura:", error);
      });
  }, [codigo]);

  const handleInputChange = (e) => {
    setCandidatura((prevCandidatura) => ({ ...prevCandidatura, [e.target.name]: e.target.value }));
  };

  const handleUpdateCandidatura = async (e) => {
    e.preventDefault();
    try {
      await axios.put("https://apijobteens.somee.com/api/candidaturas/" + candidatura.candidaturaId, candidatura);
      router.push("/candidatura");
    } catch (error) {
      console.error("Erro ao atualizar candidatura:", error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Atualizar Candidatura</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Editar</h1>
          <p>Forneça novos dados cadastrais para a atualização</p>
          <form className={styles.form}>
          <input type="text" hidden className="form-control" name="candidaturaId" value={codigo} onChange={handleInputChange} />
            <div className="mb-3">
              <label htmlFor="usuarioId" className="form-label">
                Selecione a usuário
              </label>
              <select className="form-select" id="usuarioId" name="usuarioId" value={candidatura.usuarioId} onChange={handleInputChange}>
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
              <select className="form-select" id="vagaId" name="vagaId" value={candidatura.vagaId} onChange={handleInputChange}>
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
              <input type="datetime-local" className="form-control" id="data_Candidatura" name="data_Candidatura" value={candidatura.data_Candidatura} onChange={handleInputChange}/>
            </div>

            <div className="mb-3">
            <button onClick={(e) => handleUpdateCandidatura(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
