// components/MenuLat.jsx
import Image from "next/image";
import MuxnLogo1 from "@/app/img/MUXN_logo1.png";
import logo_instagram from "@/app/img/icons/instagram_6422200.png";
import logo_twitter from "@/app/img/icons/twitter_5968830.png";
import logo_facebook from "@/app/img/icons/social_12942738.png";
import "@/app/CSS/menu_lat.css";

export default function MenuLat() {
  return (
    <div className="menu-lat">
      <div className="card overflow-hidden">
        <div className="card-body pt-0 mt-3 text-center">
          <div className="avatar avatar-lg mt-n5 mb-3">
            <a href="/perfil">
              <Image
                className="avatar-img rounded-circle border d-inline"
                src={MuxnLogo1}
                alt="logo_muxn"
                width={100}
                height={100}
              />
            </a>
          </div>
          <h5 className="mb-0">MUXN</h5>
          <small>Tecnologia</small>
          <p className="mt-3">Por um planeta melhor através da tecnologia.</p>
          <div className="hstack gap-2 gap-xl-3 justify-content-center">
            <div>
              <h6 className="mb-0">3</h6>
              <small>Projetos Apoiados</small>
            </div>
          </div>
          <div>
            <small>Contato +55 (15) 3333-3333</small>
          </div>
          <div>
            <small>contato@muxn.com.br</small>
          </div>
          <ul className="list-unstyled d-flex justify-content-center mt-2">
            <li>
              <a className="link-body-emphasis" href="https://x.com/?lang=pt-br">
                <Image src={logo_twitter} alt="Twitter" width={24} height={24} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="https://www.instagram.com/">
                <Image src={logo_instagram} alt="Instagram" width={24} height={24} />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="https://www.facebook.com/">
                <Image src={logo_facebook} alt="Facebook" width={24} height={24} />
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
}