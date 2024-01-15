import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { BsPersonAdd, BsBuilding, BsPeople, BsBriefcase, BsBookmarkCheck } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <h3>
            <Link className={`d-flex align-items-center ${styles.title}`} href={"/"}>
              <Image src="/img/logo.png" height={60} width={67} alt="logo" />
              <span>JobTeens</span>
            </Link>
          </h3>
          <button className="btn borde-0 btnNav d-lg-none d-md-block" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAlt" aria-controls="navbarNavAlt" aria-expanded="false" aria-label="Toggle navigation">
            <FiMenu className={styles.icon_menu} />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAlt">
            <div className="navbar-nav px-3">
              <Link className={`nav-link  ${styles.nav}`} href={"/"}>
                Home
              </Link>
              <Link className={`nav-link  ${styles.nav}`} href={"/vagas"}>
                Vagas
              </Link>
              <Link className={`nav-link  ${styles.nav}`} href={"/carreira"}>
                Carreira
              </Link>
              <Link className={`nav-link  ${styles.nav}`} href={"/about"}>
                Sobre nós
              </Link>

              <div className="dropdown d-flex flex-column flex-lg-row">
                <Link href={""} className={`nav-link dropdown-toggle ${styles.nav}`} id="cadastroDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </Link>
                <ul className={`dropdown-menu dropdown-menu-end ${styles.register}`} aria-labelledby="cadastroDropdown">
                  <li>
                    <Link className="dropdown-item" href={"/usuario"}>
                      <BsPeople className={styles.icon_dropdown} /> Usuários
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={"/empresa"}>
                      <BsBuilding className={styles.icon_dropdown} /> Empresas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={"/vaga"}>
                      <BsBriefcase className={styles.icon_dropdown} /> Vagas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={"/candidatura"}>
                      <BsBookmarkCheck className={styles.icon_dropdown} /> Candidaturas
                    </Link>
                  </li>
                </ul>
              </div>

              <form className="d-flex flex-column flex-lg-row gap-2" role="search">
                <Link href={"/login"} className={`btn ${styles.btn_group}`}>
                  <IoLogInOutline className={styles.icon_access} /> Login
                </Link>
                <div className="dropdown d-flex flex-column flex-lg-row">
                  <button className={`btn dropdown-toggle p-2 border-0 flex-fill ${styles.btn_groupTwo}`} id="cadastroDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsPersonAdd className={styles.icon_access} />
                    Cadastre-se
                  </button>
                  <ul className={`dropdown-menu dropdown-menu-end ${styles.register}`} aria-labelledby="cadastroDropdown">
                    <li>
                      <Link className="dropdown-item" href={"/usuario/cadastro"}>
                        <BsPeople className={styles.icon_dropdown} /> Usuário
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={"/empresa/cadastro"}>
                        <BsBuilding className={styles.icon_dropdown} /> Empresa
                      </Link>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
