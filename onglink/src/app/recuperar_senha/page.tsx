import Header_home from "../components/header_home"
import '@/src/app/CSS/header_alt.css'
import '@/src/app/CSS/menu.css'
import '@/src/app/CSS/main.css'
import '@/src/app/CSS/body.css'
import '@/src/app/CSS/cadastro.css'
import { Button, FormControl, FormLabel } from "react-bootstrap"
import Link from "next/link"

export default function RecSenha() {

    return (
    <>
    
    <Header_home/>
        
    <main id="main_recSenha">
      {/* <!--Main--> */}
      

                  {/* <!--Formulario de  recuperacao de senha--> */}
      <div className="bg-white rounded-3xl border-4 p-6 w-full max-w-4xl" id="div_cad_ong_tela_1">
        <h1>Recuperar Senha</h1>

        <p>Digite o e-mail de sua conta para que possamos lhe enviar um link definição de nova senha.</p>
           
        
        {/* <!--Divisão email/senha--> */}
        <div className="row " >
          <div className="col-1"></div>
          <div className="col-10" id="div_email">
            <FormLabel htmlFor="email">Digite seu e-mail:</FormLabel>
            <p></p>
            <FormControl type="text" name="nemail" id="email_recSenha"/>
            <Link href="/recuperar_senha/recuperar_senha2">Não lembro meu e-mail</Link>
          </div>
          <div className="col-1"></div>
        </div>
      

      

      <div className="row" id="div_entrar">

        <div className="col-10" id="div_btn_entrar">
         
          <Button variant="success" id="btn_entrar">  <a href="alterar_senha.html">Enviar </a></Button>
        </div>
        </div>
        </div>

    </main>

    </>

    )
}
    