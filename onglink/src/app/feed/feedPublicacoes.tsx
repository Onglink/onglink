'use client'
import React, { useState, useEffect } from "react";

export default function FeedPublicacoes() {
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    async function carregar() {
      const dados = await listarPublicacoes();
      setPublicacoes(dados);
    }
    carregar();
  }, []);

  return (
    <div>
      <h1>📢 Publicações</h1>
      {publicacoes.map((publi: any) => (
        <div key={publi._id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <h2>{publi.Titulo}</h2>
          <p>{publi.Texto}</p>
          {publi.Imagens?.map((img: string, i: number) => (
            <img key={i} src={img} alt={`Imagem ${i}`} width={300} />
          ))}
          <p><strong>Autor:</strong> {publi.CodUsuario}</p>
          <p><strong>Data:</strong> {new Date(publi.DataPublicacao).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
