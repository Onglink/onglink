"use client";
import logo_onglink_01 from "@/app/img/LOGO_ONGLINK_1.png";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Header_feed() {
  const router = useRouter();

  return (
    <header className="py-3" id="div_header_feed">
      <div className="container-fluid d-grid gap-3 align-items-center">
        <div className="d-flex align-items-center" id="div_header">
          <Link href="/feed">
            <Image
              className="border"
              src={logo_onglink_01}
              style={{ minWidth: "100px" }}
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

            <Button
              variant="success"
              onClick={() => {
                router.push("/feed");
              }}
            >
              {" "}
              Publicar
            </Button>

            <Button
              variant="success"
              onClick={() => {
                router.push("/");
              }}
            >
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
