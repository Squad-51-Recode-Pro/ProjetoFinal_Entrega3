import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";

export default function UpdateUser() {
  const [usuario, setUsuario] = useState({ usuarioId: "", nome: "", email: "", cpf: "", telefone: "", endereco: "", senha: "" });
  const router = useRouter();
  const { codigo } = router.query;

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

  const handleInputChange = (e) => {
    setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }));
  };

  const handleUpdateUsuario = async (e) => {
    e.preventDefault();
    try {
      await axios.put("https://apijobteens.somee.com/api/usuarios/" + usuario.usuarioId, usuario);
      router.push("/usuario");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Atualizar Usuário</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Editar</h1>
          <p>Forneça novos dados cadastrais para a atualização</p>
          <form className={styles.form}>
            <input type="text" hidden className="form-control" name="usuarioId" value={codigo} onChange={handleInputChange} />
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input type="text" className="form-control" id="nome" name="nome" value={usuario.nome} onChange={handleInputChange} placeholder="Informe o seu nome" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="text" className="form-control" id="email" name="email" value={usuario.email} onChange={handleInputChange} placeholder="Informe o seu email" />
            </div>

            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                CPF
              </label>
              <input type="text" className="form-control" id="cpf" name="cpf" value={usuario.cpf} onChange={handleInputChange} placeholder="Informe o seu CPF" />
            </div>

            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
                Telefone de contato
              </label>
              <input type="text" className="form-control" id="telefone" name="telefone" value={usuario.telefone} onChange={handleInputChange} placeholder="Informe o seu telefone" />
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input type="text" className="form-control" id="endereco" name="endereco" value={usuario.endereco} onChange={handleInputChange} placeholder="Informe o seu endereço" />
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Senha
              </label>
              <input type="text" className="form-control" id="senha" name="senha" value={usuario.senha} onChange={handleInputChange} placeholder="Informe uma senha" />
            </div>

            <div className="mb-3">
              <button onClick={(e) => handleUpdateUsuario(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
