"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Arara from '@/src/app/img/arara.jpeg';
import AraraAzul from '@/src/app/img/arara_azul.jpeg';
import MuxnLogo1 from '@/src/app/img/MUXN_logo1.png';
import Capivara from '@/src/app/img/capivara.jpeg';
import Ceu from '@/src/app/img/ceu.jpeg';
import Mico from '@/src/app/img/mico.jpeg';
import Tucano from '@/src/app/img/tucano.jpeg';


function FeedCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="d-flex align-items-center">
    <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
        <div><Image src={Capivara} className="img-fluid" alt="Capivara"width={600} height={600}/></div>
        </Carousel.Item>
      
      <Carousel.Item>
       <div><Image src={Tucano} className="img-fluid" alt="Tucano" width={600} height={600} /></div>
      </Carousel.Item>

      <Carousel.Item>
       <div><Image src={Mico} className="img-fluid" alt="Mico"width={600} height={600} /></div>
      </Carousel.Item>

      <Carousel.Item>
      <div><Image src={AraraAzul} className="img-fluid" alt="Arara Azul" width={600} height={600} /></div>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default FeedCarousel;