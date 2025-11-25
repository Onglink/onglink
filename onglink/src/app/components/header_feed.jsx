"use client";
import logo_onglink_01 from "@/app/img/LOGO_ONGLINK_1.png";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row, InputGroup, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
import BotaoSair from "./BotaoSair";

export default function Header_feed() {
  const router = useRouter();

  return (
    <header className="py-3" id="header_header">
      <div className="container-fluid d-grid gap-3 align-items-center">
        <div className="d-flex align-items-center" id="div_header">
          <Link href="/feed">
            <Image
              className="rounded-lg"
              src={logo_onglink_01}
              style={{ minWidth: "100px" }}
              alt="Logo ONGLink"
              width={130}
              id="logo_onglink"
            ></Image>
          </Link>

          {/* <form className="w-100 me-3" role="search">
            <InputGroup className="mb-3" id="searchONG">
              <Form.Control
                placeholder="Procurar ONG"
                aria-label="Procurar ONG"
                aria-describedby="basic-addon2"
                
              />
              <Button id="botaoBuscar">
                Buscar
              </Button>
            </InputGroup>
          </form> */}

          <div className="d-flex ms-auto gap-3" id="botoes_cadastro">
            {/* <Button
              id="botao_cadastro"
              onClick={() => {
                router.push("/cad_simples");
              }}
            >
              Cadastre-se
            </Button> */}

            {/* <Button
              id="botao_login"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button> */}
             {/* <Button
              id="botao_sair"
              onClick={() => {
                router.push("/");
              }}
            >
              Sair
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>

            </Button> */}
            <BotaoSair />
          </div>
        </div>
      </div>
    </header>
  );
}
