"use client";
import logo_onglink_01 from "@/src/app/img/LOGO_ONGLINK_1.png";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import "@/src/app/CSS/header_alt.css"
export default function Header_Apoio() {
  const router = useRouter();

  return (
    <header className="py-3" id="div_header_feed">
      <div className="container-fluid d-grid gap-3 align-items-center" >
        <div className="d-flex align-items-center">
          <Link href="/feed">
            <Image
              className="border"
              style={{minWidth:"100px"}}
              src={logo_onglink_01}
              alt="Logo ONGLink"
              width={150}
              id="logo_onglink"
            ></Image>
          </Link>

          <form className="w-100 me-3" role="search"></form>

          <div id="botoes_feed">
            <Button
              variant="success"
              onClick={() => {
                router.push("/perfil");
              }}
            >
              Perfil
            </Button>

             <Button variant="success" onClick={()=>{router.push("/feed")}}>Publicar</Button>

            <Button variant="success">Sair</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
