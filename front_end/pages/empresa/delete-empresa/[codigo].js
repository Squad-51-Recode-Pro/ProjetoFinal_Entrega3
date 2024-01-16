import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";

export default function DeleteEmpresa() {
  const router = useRouter();
  const { codigo } = router.query;
  const [empresa, setEmpresa] = useState({});
  const [empresaId, setEmpresaId] = useState(codigo);

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/empresas/" + codigo)
      .then((response) => {
        setEmpresa(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do empresa:", error);
      });
  }, [codigo]);

  const handleDeleteEmpresa = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("https://apijobteens.somee.com/api/empresas/" + empresaId);
      router.push("/empresa");
    } catch (error) {
      console.error("Erro ao excluir empresa:", error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Excluir Empresa</title>
      </Head>

      <section>
        <div className={styles.form_container_delete}>
          <Image src="/img/alert_delete.png" alt="alerta de exclusão" width={170} height={180} />
          <h1>Confirme exclusão</h1>
          <p>
            Deseja excluir a empresa <strong>{empresa.nome_Empresa}</strong>?
          </p>
          <div className={styles.form_gap}>
            <input type="text" value={empresaId} hidden onChange={(e) => setEmpresaId(e.target.value)} />
            <button onClick={(e) => handleDeleteEmpresa(e)}>Confirmar</button>
            <Link href={"/empresa"}>Cancelar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
