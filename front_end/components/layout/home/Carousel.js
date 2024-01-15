import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function Carousel() {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src="/img/carousel_img1.jpg" alt="Imagem da Home" width={1500} height={650} priority={true} className={styles.img_carousel} />
            <div className="container">
              <div className={`carousel-caption text-start ${styles.title_carousel}`}>
                <h1>
                  Bem vindo à <span>JobTeens</span>
                </h1>
                <h4>Inicie sua jornada profissional conosco!</h4>
                <p>
                  <Link className={`btn btn-lg ${styles.btn_carousel}`} href={"/usuario/cadastro"}>
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="/img/carousel_img2.jpg" alt="Imagem da Home" width={1500} height={650} priority={true} className={styles.img_carousel} />
            <div className="container">
              <div className={`carousel-caption ${styles.title_carouselTwo}`}>
                <h1>Explore vagas exclusivas para jovens talentos como você</h1>
                <h5>Encontre vagas exclusivas e construa seu futuro profissional.</h5>
                <p>
                  <Link className={`btn btn-lg ${styles.btn_carousel}`} href={"/vagas"}>
                    Explore Vagas
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image src="/img/carousel_img3.jpg" alt="Imagem da Home" width={1500} height={650} priority={true} className={styles.img_carousel} />
            <div className="container">
              <div className={`carousel-caption text-end ${styles.title_carouselTwo}`}>
                <h1>Descubra possibilidades de aprendizado e desenvolvimento profissional</h1>
                <h5>Mantenha-se atualizado com as novidades que impulsionam carreiras.</h5>
                <p>
                  <Link className={`btn btn-lg ${styles.btn_carousel}`} href={"/carreira"}>
                    Saiba Mais
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
