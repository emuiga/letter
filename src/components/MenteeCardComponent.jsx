import { useState } from 'react';
import useSound from 'use-sound';
import { FaPlay, FaPause } from 'react-icons/fa';
import MenteeCard from '../Pages/MenteeCard';
import SherryPng from "../assets/sherry.png"
import LauraPng from "../assets/laura.png"
import PeterPng from "../assets/peter.png"
import KebibaPng from "../assets/kebiba.png"
import NyayiekaPng from "../assets/nyayieka.png"
import KendiPng from "../assets/kendi.png"
import KibutiPng from "../assets/kibuti.png"
import SebbiePng from "../assets/sebbie.png"
import RachaelPng from "../assets/rachael.png"
import AngelaPng from "../assets/angela.png"

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('sound1.mp3', { loop: true, interrupt: false });

  
// const cardsData = Array.from({ length: 38 }, (_, index) => ({
//   imgSrc: `https://picsum.photos/400/400?random=${index}`, 
//   imgAlt: `Random Image ${index + 1}`,
//   title: `Card Title ${index + 1}`,
// }));

const cardsData = [
  { imgSrc: SherryPng, imgAlt: `Image 1`, title: "Sherry Obare" },
  { imgSrc: LauraPng, imgAlt: `Image 2`, title: "Sarah Laura" },
  { imgSrc: PeterPng, imgAlt: `Image 3`, title: "Peter Wambua" },
  { imgSrc: KebibaPng, imgAlt: `Image 4`, title: "Justin Kebiba" },
  { imgSrc: SherryPng, imgAlt: `Image 5`, title: "Kristian Hans" },
  { imgSrc: SherryPng, imgAlt: `Image 6`, title: "Prince Mwangi" },
  { imgSrc: SherryPng, imgAlt: `Image 7`, title: "Sally Mulupi" },
  { imgSrc: SherryPng, imgAlt: `Image 8`, title: "Sandra Wanjiku" },
  { imgSrc: SherryPng, imgAlt: `Image 9`, title: "Sharon Chang'ach" },
  { imgSrc: SherryPng, imgAlt: `Image 10`, title: "Simon Kiragu" },
  { imgSrc: SherryPng, imgAlt: `Image 11`, title: "Stephanie Mukami" },
  { imgSrc: SherryPng, imgAlt: `Image 12`, title: "Tiffany Kosgei" },
  { imgSrc: SherryPng, imgAlt: `Image 13`, title: "Victoria Rotich" },
  { imgSrc: SherryPng, imgAlt: `Image 14`, title: "Lord Denish" },
  { imgSrc: SherryPng, imgAlt: `Image 15`, title: "Kinyanjui Brian" },
  { imgSrc: NyayiekaPng, imgAlt: `Image 16`, title: "Joy Nyayieka" },
  { imgSrc: SherryPng, imgAlt: `Image 17`, title: "Kennedy Mwendwa" },
  { imgSrc: SherryPng, imgAlt: `Image 18`, title: "Linet Ithara" },
  { imgSrc: SherryPng, imgAlt: `Image 19`, title: "Jean Wanjira" },
  { imgSrc: KibutiPng, imgAlt: `Image 20`, title: "James Kibuti" },
  { imgSrc: SherryPng, imgAlt: `Image 21`, title: "Huldah Kaura" },
  { imgSrc: KendiPng, imgAlt: `Image 22`, title: "Joy Kendi" },
  { imgSrc: SherryPng, imgAlt: `Image 23`, title: "Abigail 'Pep' Mbugua" },
  { imgSrc: SherryPng, imgAlt: `Image 24`, title: "Viv Mwirigi" },
  { imgSrc: SherryPng, imgAlt: `Image 25`, title: "Wayne Asava" },
  { imgSrc: SherryPng, imgAlt: `Image 26`, title: "Steve Muiga" },
  { imgSrc: RachaelPng, imgAlt: `Image 27`, title: "Rachael" },
  { imgSrc: SherryPng, imgAlt: `Image 28`, title: "Hansel Omondi" },
  { imgSrc: SherryPng, imgAlt: `Image 29`, title: "Dorcas Nkirote" },
  { imgSrc: SherryPng, imgAlt: `Image 30`, title: "Collins Kubu" },
  { imgSrc: SherryPng, imgAlt: `Image 31`, title: "Eddah Bett" },
  { imgSrc: SherryPng, imgAlt: `Image 32`, title: "George Karanja" },
  { imgSrc: SherryPng, imgAlt: `Image 33`, title: "Fidel Otieno" },
  { imgSrc: SherryPng, imgAlt: `Image 34`, title: "David Muiruri" },
  { imgSrc: SherryPng, imgAlt: `Image 35`, title: "Danny Ercy" },
  { imgSrc: AngelaPng, imgAlt: `Image 36`, title: "Angela Kinoro" },
  { imgSrc: SebbiePng, imgAlt: `Image 37`, title: "Sebbie Mzing" },
  { imgSrc: SherryPng, imgAlt: `Image 38`, title: "Shadrack Anyona" },
];


  const togglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="flex justify-center">
        <button className="text-3xl p-4" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <div>
      <h2 className="header-text">[hi play above track as you read this]</h2>
      </div>
      
      <div className="card-grid">
       {cardsData.map((card, index) => (
          <MenteeCard
              key={index}
              imgSrc={card.imgSrc}
              imgAlt={card.imgAlt}
              title={card.title}
          />
      ))}
  </div>
    </>
  );
}

