import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from "next/image";
import logo from "@/app/img/MUXN_logo1.png";
import styles from "@/app/CSS/botao_cards.module.css";
function CardsParceiros({ titulo, imagem, resumo, link }) {
  return (
    <div className={styles.card}>
      <Image src={imagem} alt={`Logo ${titulo}`} className={styles.imagem} />
      <div className={styles.conteudo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.resumo}>{resumo}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.botao}>
          Visitar parceiro
        </a>
      </div>
    </div>

  );
}

export default CardsParceiros;