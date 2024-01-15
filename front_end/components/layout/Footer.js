import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-2">
              <h6>Início</h6>
              <ul className={styles.style_list}>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/vagas"}>Oportundades</Link>
                </li>
                <li>
                  <Link href={"/carreira"}>Carreira Profissional</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>Sobre nós</h6>
              <ul className={styles.style_list}>
                <li>
                  <Link href={"/about"}>Informações da Empresa</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/about"}>Contanto</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/"}>Parceiros e Colaboradores</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>Suporte</h6>
              <ul className={styles.style_list}>
                <li>
                  <Link href={"/"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"/about"}>Telefones</Link>
                </li>
                <li>
                  <Link href={"/about"}>Email</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Fique por dentro das novidades</h5>
              <p>Resumo mensal do que há de novo e emocionante de nós.</p>
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input className="form-control" type="email" placeholder="Endereço de email" aria-label="email" />
                <button className={`btn ${styles.btn_subscription}`} type="submit">
                  Inscreva-se
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={`container-fluid text-center d-flex flex-column flex-sm-row justify-content-between align-items-center ${styles.copyright}`}>
          <span>&copy; 2024 JobTeens. Todos os direitos reservados.</span>
          <div className={`d-flex gap-2 ${styles.icon_social}`}>
            <FaFacebook className={styles.icon_link} />
            <FaInstagram className={styles.icon_link} />
            <FaTwitter className={styles.icon_link} />
          </div>
        </div>
      </footer>
    </>
  );
}
