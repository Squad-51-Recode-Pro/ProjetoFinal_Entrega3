import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DeleteUser() {
  const router = useRouter();
  const { codigo } = router.query;
  const [usuario, setUsuario] = useState({});
  const [usuarioId, setUsuarioId] = useState(codigo);

  useEffect(() => {
    axios
      .get("https://apijobteens.somee.com/api/usuarios/" + codigo)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do usuário:", error);
      });
  }, [codigo]);

  const handleDeleteUsuario = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("https://apijobteens.somee.com/api/usuarios/" + usuarioId);
      router.push("/usuario");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Excluir Usuário</title>
      </Head>

      <section>
        <div className={styles.form_container_delete}>
          <Image src="/img/alert_delete.png" alt="alerta de exclusão" width={170} height={180} />
          <h1>Confirme exclusão</h1>
          <p>
            Deseja excluir usuário(a) <strong>{usuario.nome}</strong>?
          </p>
          <div className={styles.form_gap}>
            <input type="text" value={usuarioId} hidden onChange={(e) => setUsuarioId(e.target.value)} />
            <button onClick={(e) => handleDeleteUsuario(e)}>Confirmar</button>
            <Link href={"/usuario"}>Cancelar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
