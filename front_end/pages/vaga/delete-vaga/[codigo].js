import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DeleteVaga() {
  const router = useRouter();
  const { codigo } = router.query;
  const [empresa, setEmpresa] = useState({});
  const [vaga, setVaga] = useState({});
  const [vagaId, setVagaId] = useState(codigo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vagaResponse = await axios.get(`https://apijobteens.somee.com/api/vagas/${codigo}`);
        setVaga(vagaResponse.data);

        const empresaResponse = await axios.get(`https://apijobteens.somee.com/api/empresas/${vagaResponse.data.empresaId}`);
        setEmpresa(empresaResponse.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes da vaga:", error);
      }
    };

    fetchData();
  }, [codigo]);

  const handleDeleteVaga = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("https://apijobteens.somee.com/api/vagas/" + vagaId);
      router.push("/vaga");
    } catch (error) {
      console.error("Erro ao excluir vaga:", error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Excluir Vaga</title>
      </Head>

      <section>
        <div className={styles.form_container_delete}>
          <Image src="/img/alert_delete.png" alt="alerta de exclusão" width={170} height={180} />
          <h1>Confirme exclusão</h1>
          <p>
            Deseja excluir a vaga de <strong>{vaga.cargo}</strong> da <strong>{empresa.nome_Empresa}</strong>?
          </p>
          <div className={styles.form_gap}>
            <input type="text" value={vagaId} hidden onChange={(e) => setVagaId(e.target.value)} />
            <button onClick={(e) => handleDeleteVaga(e)}>Confirmar</button>
            <Link href={"/vaga"}>Cancelar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
