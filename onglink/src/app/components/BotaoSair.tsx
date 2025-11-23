'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

export default function BotaoSair() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Limpeza de Segurança: Remove dados da sessão
    if (typeof window !== 'undefined') {
      localStorage.removeItem('usuarioLogado');
      localStorage.removeItem('lastActivity'); // Remove rastro do AutoLogout
      
      // Opcional: Limpar dados temporários de formulários
      localStorage.removeItem('basico');
      localStorage.removeItem('endereco');
      localStorage.removeItem('social');
      localStorage.removeItem('upload');
    }

    // 2. Redireciona para a tela de login
    // Usar replace em vez de push evita que o usuário volte com o botão "Voltar" do navegador
    router.replace('/login');
  };

  return (
    <Button
      id="botao_sair"
      onClick={handleLogout}
      className="d-flex align-items-center justify-content-center gap-2" // Ajuste de layout flex
      variant="danger" // Sugestão: Botões de sair geralmente são vermelhos/danger, mas pode manter o padrão
    >
      Sair
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-log-out-icon lucide-log-out"
      >
        <path d="m16 17 5-5-5-5"/>
        <path d="M21 12H9"/>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      </svg>
    </Button>
  );
}