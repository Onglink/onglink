"use client";
import logo_onglink_01 from "@/app/img/LOGO_ONGLINK_1.png";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Header_home() {
  const router = useRouter();

  return (
    <header className="py-3" id="header_header">
      <div className="container-fluid d-grid gap-3 align-items-center">
        <div className="d-flex align-items-center" id="div_header">
          <Link href="/">
            <Image
              className="border"
              src={logo_onglink_01}
              style={{ minWidth: "100px" }}
              alt="Logo ONGLink"
              width={130}
              id="logo_onglink"
            ></Image>
          </Link>

          <form className="w-100 me-3" role="search"></form>

          <div id="botoes_cadastro">
            <Button
              variant="success"
              onClick={() => {
                router.push("/cad_pj");
              }}
            >
              Cadastre-se
            </Button>

            <Button
              variant="success"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
