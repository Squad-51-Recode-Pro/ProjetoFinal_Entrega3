import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Form.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function CadastroUsuario() {
  const [newUsuario, setNewUsuario] = useState({ nome: "", email: "", cpf: "", telefone: "", endereco: "", senha: ""});
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewUsuario({ ...newUsuario, [e.target.name]: e.target.value });
  };

  const handleAddUsuario = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://apijobteens.somee.com/api/usuarios", newUsuario);
      router.push("/usuario");
    } catch (error) {
      alert("Erro ao inserir a usuário:" + error);
    }
  };

  return (
    <>
      <Head>
        <title>JobTeens | Cadastro Usuário</title>
      </Head>

      <section className={`container d-flex justify-content-center`}>
        <div className={styles.form_container}>
          <h1>Cadastrar-se</h1>
          <p>Registre-se e descubra vagas especialmente para você</p>
          <form className={styles.form}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input type="text" className="form-control" id="nome" name="nome" value={newUsuario.nome} 
              onChange={handleInputChange} placeholder="Informe o seu nome" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="text" className="form-control" id="email" name="email" value={newUsuario.email} 
              onChange={handleInputChange} placeholder="Informe o seu email" />
            </div>

            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                CPF
              </label>
              <input type="text" className="form-control" id="cpf" name="cpf" value={newUsuario.cpf} 
              onChange={handleInputChange} placeholder="Informe o seu CPF" />
            </div>

            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
                Telefone de contato
              </label>
              <input type="text" className="form-control" id="telefone" name="telefone" value={newUsuario.telefone} 
              onChange={handleInputChange} placeholder="Informe o seu telefone" />
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Endereço
              </label>
              <input type="text" className="form-control" id="endereco" name="endereco" value={newUsuario.endereco} 
              onChange={handleInputChange} placeholder="Informe o seu endereço" />
            </div>

            <div className="mb-3">
              <label htmlFor="endereco" className="form-label">
                Senha
              </label>
              <input type="text" className="form-control" id="senha" name="senha" value={newUsuario.senha} 
              onChange={handleInputChange} placeholder="Informe uma senha" />
            </div>

            <div className="mb-3">
              <button onClick={(e) => handleAddUsuario(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
