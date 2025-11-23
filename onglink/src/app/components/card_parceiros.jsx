// app/components/card_parceiros.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button'; // Importado se você usar o Button
import Card from 'react-bootstrap/Card'; // Importado se você usar o Card

// Importa a imagem de fallback local
import logoDefault from "@/app/img/MUXN_logo1.png"; 
import styles from "@/app/CSS/botao_cards.module.css"; 


// [CORREÇÃO] A função agora aceita explicitamente TODAS as props:
// 1. borderColor (estilização)
// 2. onViewDetails e partnerData (funcionalidade do Modal)
function CardsParceiros({ titulo, imagem, resumo, link, borderColor, onViewDetails, partnerData }) {
    
    const finalTitulo = titulo || 'Parceiro Desconhecido';
    const finalResumo = resumo || 'Telefone não disponível';
    const finalLink = link || '#';
    
    // Tratamento de imagem
    const isImageValidUrl = (typeof imagem === 'string' && imagem.length > 0 && (imagem.startsWith('http') || imagem.startsWith('/')));
    const imageSrc = isImageValidUrl ? imagem : logoDefault;
    const isRemote = typeof imageSrc === 'string' && imageSrc !== logoDefault; 

    // Define props de layout
    const imageProps = isRemote 
        ? { src: imageSrc, width: 200, height: 150 } 
        : { src: imageSrc }; 

    // Estilo do Card
    const cardStyle = {
        width: '18rem',
        marginRight: '15px',
        marginBottom: '15px',
        border: `3px solid ${borderColor}`, // Aplica a cor da borda
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    };

    return (
        // Aplica o cardStyle na div principal
        <div style={cardStyle} className={styles.card}>
            
            <div className={styles.imageContainer = "m-2"}>
                <Image
                    {...imageProps} 
                    alt={`Logo ${finalTitulo}`}
                    className={styles.imagem}
                    objectFit="cover"
                />
            </div>

            <div className={styles.conteudo}>
                
                <h3 className={styles.titulo} style={{ color: borderColor }}>{finalTitulo}</h3>
                
                <p className={styles.resumo}>
                    **Telefone:** {finalResumo}
                </p>

                {/* BOTÃO QUE DISPARA O MODAL */}
                <Button 
                    onClick={() => onViewDetails(partnerData)} // Chama a função do componente pai, passando os dados
                    variant="primary" 
                    className={styles.botao}
                    style={{ width: '100%', backgroundColor: borderColor, borderColor: borderColor }} // Estiliza com a cor da categoria
                >
                    Visitar parceiro
                </Button>
            </div>
        </div>
    );
}

export default CardsParceiros;