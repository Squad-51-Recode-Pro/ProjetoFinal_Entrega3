import React from "react";
import styles from '@/styles/Home.module.css';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaUsersGear, FaIndustry, FaMoneyBillTrendUp, FaCartFlatbed } from "react-icons/fa6";
import { TbShoppingCartDollar } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdConstruction, MdCleaningServices } from "react-icons/md";

export default function CardAreas() {
  return (
    <>
      <section className={styles.section_content_areas}>
        <div className={`container ${styles.main_heading_areas}`}>
          <h1>
            #<span>Destaque</span> <strong>áreas profissionais</strong>
          </h1>
        </div>

       
      </section>
    </>
  );
}
