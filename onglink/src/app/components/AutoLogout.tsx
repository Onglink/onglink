'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Configuração: Tempo limite (30 minutos)
const TIMEOUT_MS = 15 * 60 * 1000; 

export default function AutoLogout() {
  const router = useRouter();

  useEffect(() => {
    // 1. Definição da função de Logout (DENTRO do useEffect para resolver dependências)
    const performLogout = () => {
      // Verifica se está no navegador
      if (typeof window !== 'undefined') {
        const wasLoggedIn = localStorage.getItem('usuarioLogado');
        
        // Só executa se realmente havia alguém logado
        if (wasLoggedIn) {
          console.log("⏳ Sessão expirada por inatividade.");
          
          // Limpa dados
          localStorage.removeItem('usuarioLogado');
          localStorage.removeItem('lastActivity');
          localStorage.removeItem('basico'); 
          localStorage.removeItem('endereco'); 
          localStorage.removeItem('social'); 
          localStorage.removeItem('upload'); 
          
          alert("Sua sessão expirou por inatividade. Por favor, faça login novamente.");
          router.push('/login');
        }
      }
    };

    // 2. Verificação Inicial (ao carregar a página)
    if (typeof window !== 'undefined') {
        const lastActivity = localStorage.getItem('lastActivity');
        if (lastActivity) {
            const now = Date.now();
            const timeDiff = now - parseInt(lastActivity, 10);
            
            if (timeDiff > TIMEOUT_MS) {
                performLogout();
                return;
            }
        }
    }

    // 3. Configurar monitoramento de atividade
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      if (typeof window !== 'undefined') {
          localStorage.setItem('lastActivity', Date.now().toString());
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(performLogout, TIMEOUT_MS);
    };

    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];
    events.forEach((event) => document.addEventListener(event, resetTimer));

    resetTimer(); // Inicia contagem

    // Limpeza ao desmontar
    return () => {
      if (timer) clearTimeout(timer);
      events.forEach((event) => document.removeEventListener(event, resetTimer));
    };
  }, [router]); // Agora só dependemos do router, que é estável.

  return null; // Componente invisível
}