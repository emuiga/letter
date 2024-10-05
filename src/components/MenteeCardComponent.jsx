import { useState } from 'react';
import useSound from 'use-sound';
import { FaPlay, FaPause } from 'react-icons/fa';
import MenteeCard from '../Pages/MenteeCard';
// import { MenteeCardComponent } from '../components/MenteeCardComponent';
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
  const [play, { stop }] = useSound('sound.mp3', { loop: true, interrupt: false });

  
// const cardsData = Array.from({ length: 38 }, (_, index) => ({
//   imgSrc: `https://picsum.photos/400/400?random=${index}`, 
//   imgAlt: `Random Image ${index + 1}`,
//   title: `Card Title ${index + 1}`,
// }));

const cardsData = [
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Sherry Obare" },
  { imgSrc: LauraPng, imgAlt: "Image 1", title: "Sarah Laura" },
  { imgSrc: PeterPng, imgAlt: "Image 1", title: "Peter Wambua" },
  { imgSrc: KebibaPng, imgAlt: "Image 1", title: "Justin Kebiba" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Kristian Hans" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Prince Mwangi" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Sally Mulupi" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Sandra Wanjiku" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Sharon Chang'ach" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Simon Kiragu" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Stephanie Mukami" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Tiffany Kosgei" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Victoria Rotich" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Lord Denish" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Kinyanjui Brian" },
  { imgSrc: NyayiekaPng, imgAlt: "Image 1", title: "Joy Nyayieka" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Kennedy Mwendwa" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Linet Ithara" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Jean Wanjira" },
  { imgSrc: KibutiPng, imgAlt: "Image 1", title: "James Kibuti" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Huldah Kaura" },
  { imgSrc: KendiPng, imgAlt: "Image 1", title: "Joy Kendi" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Abigail 'Pep' Mbugua" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Viv Mwirigi" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Wayne Asava" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Steve Muiga" },
  { imgSrc: RachaelPng, imgAlt: "Image 1", title: "Rachael" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Hansel Omondi" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Dorcas Nkirote" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Collins Kubu" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Eddah Bett" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "George Karanja" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Fidel Otieno" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "David Muiruri" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Danny Ercy" },
  { imgSrc: AngelaPng, imgAlt: "Image 1", title: "Angela Kinoro" },
  { imgSrc: SebbiePng, imgAlt: "Image 1", title: "Sebbie Mzing" },
  { imgSrc: SherryPng, imgAlt: "Image 1", title: "Shadrack Anyona" },
  // { imgSrc: require("../assets/image2.jpg"), imgAlt: "Image 2", title: "Card Title 2" },
  // { imgSrc: require("../assets/image3.jpg"), imgAlt: "Image 3", title: "Card Title 3" },
  // // ... continue adding for each image
  // { imgSrc: require("../assets/image38.jpg"), imgAlt: "Image 38", title: "Card Title 38" },
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
      <h2 class="framer-text">[hi play above track as you read this]</h2>
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

