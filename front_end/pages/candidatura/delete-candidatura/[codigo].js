import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";

export default function DeleteCandidatura() {
  const router = useRouter();
  const { codigo } = router.query;
  const [candidatura, setCandidatura] = useState({});
  const [usuario, setUsuario] = useState({});
  const [vaga, setVaga] = useState({});
  const [candidaturaId, setCandidaturaId] = useState(codigo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidaturaResponse = await axios.get(`https://apijobteens.somee.com/api/candidaturas/${codigo}`);
        setCandidatura(candidaturaResponse.data);

        const usuarioResponse = await axios.get(`https://apijobteens.somee.com/api/usuarios/${candidaturaResponse.data.usuarioId}`);
        setUsuario(usuarioResponse.data);
        const vagaResponse = await axios.get(`https://apijobteens.somee.com/api/vagas/${candidaturaResponse.data.vagaId}`);
        setVaga(vagaResponse.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes da candidatura:", error);
      }
    };

    fetchData();
  }, [codigo]);

  const handleDeleteCandidatura = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("https://apijobteens.somee.com/api/candidaturas/" + candidaturaId);
      router.push("/candidatura");
    } catch (error) {
      console.error("Erro ao excluir candidatura:", error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Excluir Candidatura</title>
      </Head>

      <section>
        <div className={styles.form_container_delete}>
          <Image src="/img/alert_delete.png" alt="alerta de exclusão" width={170} height={180} />
          <h1>Confirme exclusão</h1>
          <p>
            Deseja excluir a candidatura de <strong>{usuario.nome} </strong>
            <br />a vaga de <strong>{vaga.cargo}</strong>?
          </p>
          <div className={styles.form_gap}>
            <input type="text" value={candidaturaId} hidden onChange={(e) => setCandidaturaId(e.target.value)} />
            <button onClick={(e) => handleDeleteCandidatura(e)}>Confirmar</button>
            <Link href={"/candidatura"}>Cancelar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
