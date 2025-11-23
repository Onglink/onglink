'use client';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';


export default function BotaoVisitante() {
  const router = useRouter();

  const handleVisitanteClick = () => {
    // Verifica se estamos no ambiente do navegador antes de acessar localStorage
    if (typeof window !== 'undefined') {
      const usuarioLogado = localStorage.getItem('usuarioLogado');

      if (usuarioLogado) {
        // Se já estiver logado, redireciona para o Feed principal
        console.log("Usuário já logado, indo para /feed");
        router.push('/feed');
      } else {
        // Se não estiver logado, vai para o Feed de Visitante
        console.log("Visitante, indo para /feedVisitante");
        router.push('/feedVisitante');
      }
    }
  };

  return (
    <div className="mt-0">
      <Button 
        id="botao_cadastro2" 
        onClick={handleVisitanteClick}
        // Adicione aqui outras classes ou variantes se necessário
      >
        Entre como visitante
      </Button>
    </div>
  );
}